package com.dp.gestioncar.controller;

import com.dp.gestioncar.entity.Demuna_ArchivoEntity;
import com.dp.gestioncar.entity.Demuna_ArchivoPk;
import com.dp.gestioncar.entity.Demuna_FichaEntity;
import com.dp.gestioncar.entity.Seg_usuario_rolesEntity;
import com.dp.gestioncar.entity.UsuarioEntity;
import com.dp.gestioncar.service.Demuna_FichaService;
import com.dp.gestioncar.service.UsuarioService;
import com.dp.gestioncar.service.VariableSistemaLocalService;
import com.dp.gestioncar.util.Constantes;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class ResourceController {

    Logger logger = LoggerFactory.getLogger(ResourceController.class);

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private VariableSistemaLocalService variableSistemaLocalService;

    @Autowired
    private Demuna_FichaService demuna_FichaService;

    //@PostMapping({"/", "/login"}) 
    @RequestMapping(value = {"/", "/login"}, method = {RequestMethod.GET, RequestMethod.POST})
    public String loginEndpoint() {
        return "/login";
    }

    @GetMapping(value = "/logout")
    public String logoutOff(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login";
    }

//    @GetMapping(value = "/error")
//    public String loginError(ModelMap model) {
//        return "login";
//    }
    @GetMapping(value = "/403")
    public String Deny(ModelMap model) {
        return "403";
    }

    @GetMapping(value = "/406")
    public String Deny_406(ModelMap model) {
        return "pages-error-406";
    }

    @GetMapping("/home")
    public RedirectView home(HttpSession httpSession, Model model, RedirectAttributes attributes) {
        Demuna_FichaEntity ficha = null;

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();
        String url = "";
        String rol_usuario = "";
        String rol_especialista = "";

        String tipo_usuario = (String) httpSession.getAttribute("session_tipo_usuario");
        String cod_unico = (String) httpSession.getAttribute("session_cod_unico");

        if (tipo_usuario.equals("A")) {//usuario de la dp

            rol_usuario = Constantes.ROL_COMISIONADO;

            ficha = demuna_FichaService.getFichaByCodigoUnico(cod_unico.trim());
        } else if (tipo_usuario.equals("B")) {//usuario externo
            rol_usuario = Constantes.ROL_DIRECTOR;
            ficha = demuna_FichaService.getFichaByCodigoUnico(username.trim());

        } else if (tipo_usuario.equals("C")) {//especialista de la dp
            System.out.println("tipo_usuario: " + tipo_usuario);
             UsuarioEntity usuariox = usuarioService.buscarUsuario(username.trim().toUpperCase());
           

            for (Seg_usuario_rolesEntity seg_usuario_rolesEntity : usuariox.getSeg_usuario_rolesentity()) {

                if (seg_usuario_rolesEntity.getSeg_rolesentity().getName_rol().trim().toUpperCase().equals("ROLE_DEMUNA_FICHA_ESPECIALISTA")) {
                    System.out.println("ok");
                    rol_especialista = Constantes.ROL_ESPECIALISTA;
                    rol_usuario = Constantes.ROL_COMISIONADO;
                    break;
                }
            }
        }
/////////////////////////////////////////////////////////////////
        if (tipo_usuario.equals("C") && rol_especialista.equals(Constantes.ROL_ESPECIALISTA)) {
            url = "/dp/especialista/ficha/listarMonitoreoFichas";
        } else if (tipo_usuario.equals("C") && rol_especialista.equals("")) {
            url = "/403";
        } else {
            if (ficha != null && ficha.getId_ficha() != null) {

                attributes.addAttribute("id_ficha", ficha.getId_ficha());
                url = "/dp/usuario/ficha/editarFichas";

            } else {
                attributes.addAttribute("cod_unico", tipo_usuario.equals("A") ? cod_unico.trim() : tipo_usuario.equals("B") ? username.trim() : "");
                url = "/dp/usuario/ficha/insertarFichas";
            }
        }
        
   //////////////////////

        httpSession.setAttribute("rol_usuario", rol_usuario);
        httpSession.setAttribute("rol_especialista", rol_especialista);

        RedirectView redirectView = new RedirectView();
        redirectView.setContextRelative(true);
        redirectView.setUrl(url);

        return redirectView;

    }

    @GetMapping("/authorized")
    public @ResponseBody
    String authorized() {
        String usuario_usu, des_sigla = "";
        UsuarioEntity usuario = new UsuarioEntity();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated() == true && !authentication.getPrincipal().toString().trim().toUpperCase().equals("ANONYMOUSUSER")) {
            usuario_usu = authentication.getPrincipal().toString().toUpperCase().trim();
            usuario = usuarioService.buscarUsuario(usuario_usu);
            if (usuario != null && usuario.getDependencia() != null) {
                des_sigla = usuario.getDependencia().getDes_sigla();
            }
        }
        return des_sigla;
    }

    

    public static boolean isNumerico(String s) {
        ParsePosition pos = new ParsePosition(0);
        NumberFormat.getInstance().parse(s, pos);
        return s.length() == pos.getIndex();
    }
}
