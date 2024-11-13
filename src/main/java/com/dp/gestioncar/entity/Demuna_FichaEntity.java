/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncar.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

/**
 *
 * @author asalas
 */
@Entity

@Table(name = "car_ficha", schema = "SIGA")
public class Demuna_FichaEntity implements Serializable {

    @Id
    private Integer id_ficha;
    
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;

    private String estado;
    private String codi_depe_tde;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_supervision;
    
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    private String flag_validar;
     private String usu_valida;

     private Integer id_sestablecmnt;
    private String cod_unico;
    private String cel_comisionado;
     private String aceptar;
     private String c_tipo_entidad;
  
    private String nom_entidad;
   
    private String codi_depa_dpt;
    private String codi_prov_tpr;
    private String codi_dist_tdi;

    @Formula("(select t.desc_depe_tde from siga.tdependencias t where t.codi_depe_tde = codi_depe_tde)")
    private String txt_desc_depe_tde;

    @Formula("(select u.nomb_cort_usu from siga.usuario u where trim(u.usuario_usu) = trim(usu_registro))")
    private String txt_comisionado;

    @Formula("decode(estado,'I','INCOMPLETA','C','COMPLETA')")
    private String txt_estado_ficha;


    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = '00' and x.coddist = '00')")
    private String departamento_car;
    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = codi_prov_tpr and x.coddist = '00')")
    private String provincia_car;
    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = codi_prov_tpr and x.coddist = codi_dist_tdi)")
    private String distrito_car;
    
     //@Formula("decode(flag_validar,'0','Ficha sin Validar','1','Validación Parcial','2','Validación Completada')")
    @Formula("decode(nvl(flag_validar, '0'), '0', 'Ficha sin Validar', '1', 'Validación Parcial', '2', 'Validación Completada')")
    private String txt_flag_validar;
    
    // Nuevos campos agregados
    private String dni_comisionado;
    private String correo_comisionado;
    private String centro_poblado;
    private String comunidad_campe;
    private String comunidad_indigena;
    private String direccion_car;
    private String modalidad_car;
    private String acargode;
    private String acargode_otros;
    private String inmueble_car;
    private String tipo_car;
    private String perfil_car;
    private String perfil_car_otros;
    private Integer edadmin;
    private Integer edadmax;
    private String estado_s1;
    
    
    
    
    @Transient
    private Demuna_FichaEntity car_ficha;
    
    @Transient
    public Demuna_Ficha_S1Entity car_ficha_s1;
    @Transient
    public Demuna_Ficha_S2Entity car_ficha_s2;
    @Transient
    private Demuna_Ficha_S3Entity car_ficha_s3;
    @Transient
    private Demuna_Ficha_S4Entity car_ficha_s4;
    @Transient
    private Demuna_Ficha_S5Entity car_ficha_s5;
    @Transient
    private Demuna_Ficha_S6Entity car_ficha_s6;
    @Transient
    private Demuna_Ficha_S7Entity car_ficha_s7;
    @Transient
    private Demuna_Ficha_S8Entity car_ficha_s8;
    @Transient
    private Demuna_Ficha_S9Entity car_ficha_s9;
    @Transient
    private Demuna_Ficha_S10Entity car_ficha_s10;
    
    
    @Transient
    private String msg_modal;
    @Transient
    private String txt_btn_guardado_parcial;
    @Transient
    private boolean flag_readonly;
    @Transient
    private boolean flag_ie;
    @Transient
    private boolean flag_guardado_parcial;
    @Transient
    private String msg_modal_ie;
    @Transient
    private String flag_modal;
    @Transient
    private String cod_unico_ant;

    public Integer getId_ficha() {
        return id_ficha;
    }

    public void setId_ficha(Integer id_ficha) {
        this.id_ficha = id_ficha;
    }

    public String getUsu_registro() {
        return usu_registro;
    }

    public void setUsu_registro(String usu_registro) {
        this.usu_registro = usu_registro;
    }

    public Date getFch_registro() {
        return fch_registro;
    }

    public void setFch_registro(Date fch_registro) {
        this.fch_registro = fch_registro;
    }

    public String getUsu_actualiza() {
        return usu_actualiza;
    }

    public void setUsu_actualiza(String usu_actualiza) {
        this.usu_actualiza = usu_actualiza;
    }

    public Date getFch_actualiza() {
        return fch_actualiza;
    }

    public void setFch_actualiza(Date fch_actualiza) {
        this.fch_actualiza = fch_actualiza;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCodi_depe_tde() {
        return codi_depe_tde;
    }

    public void setCodi_depe_tde(String codi_depe_tde) {
        this.codi_depe_tde = codi_depe_tde;
    }

    public Date getFch_supervision() {
        return fch_supervision;
    }

    public void setFch_supervision(Date fch_supervision) {
        this.fch_supervision = fch_supervision;
    }

    public Date getFch_valida() {
        return fch_valida;
    }

    public void setFch_valida(Date fch_valida) {
        this.fch_valida = fch_valida;
    }

    public String getFlag_validar() {
        return flag_validar;
    }

    public void setFlag_validar(String flag_validar) {
        this.flag_validar = flag_validar;
    }

    public String getUsu_valida() {
        return usu_valida;
    }

    public void setUsu_valida(String usu_valida) {
        this.usu_valida = usu_valida;
    }

    public Integer getId_sestablecmnt() {
        return id_sestablecmnt;
    }

    public void setId_sestablecmnt(Integer id_sestablecmnt) {
        this.id_sestablecmnt = id_sestablecmnt;
    }

    public String getCod_unico() {
        return cod_unico;
    }

    public void setCod_unico(String cod_unico) {
        this.cod_unico = cod_unico;
    }

    public String getCel_comisionado() {
        return cel_comisionado;
    }

    public void setCel_comisionado(String cel_comisionado) {
        this.cel_comisionado = cel_comisionado;
    }

    public String getAceptar() {
        return aceptar;
    }

    public void setAceptar(String aceptar) {
        this.aceptar = aceptar;
    }

    public String getC_tipo_entidad() {
        return c_tipo_entidad;
    }

    public void setC_tipo_entidad(String c_tipo_entidad) {
        this.c_tipo_entidad = c_tipo_entidad;
    }

    public String getNom_entidad() {
        return nom_entidad;
    }

    public void setNom_entidad(String nom_entidad) {
        this.nom_entidad = nom_entidad;
    }

    public String getCodi_depa_dpt() {
        return codi_depa_dpt;
    }

    public void setCodi_depa_dpt(String codi_depa_dpt) {
        this.codi_depa_dpt = codi_depa_dpt;
    }

    public String getCodi_prov_tpr() {
        return codi_prov_tpr;
    }

    public void setCodi_prov_tpr(String codi_prov_tpr) {
        this.codi_prov_tpr = codi_prov_tpr;
    }

    public String getCodi_dist_tdi() {
        return codi_dist_tdi;
    }

    public void setCodi_dist_tdi(String codi_dist_tdi) {
        this.codi_dist_tdi = codi_dist_tdi;
    }

    public String getTxt_desc_depe_tde() {
        return txt_desc_depe_tde;
    }

    public void setTxt_desc_depe_tde(String txt_desc_depe_tde) {
        this.txt_desc_depe_tde = txt_desc_depe_tde;
    }

    public String getTxt_comisionado() {
        return txt_comisionado;
    }

    public void setTxt_comisionado(String txt_comisionado) {
        this.txt_comisionado = txt_comisionado;
    }

    public String getTxt_estado_ficha() {
        return txt_estado_ficha;
    }

    public void setTxt_estado_ficha(String txt_estado_ficha) {
        this.txt_estado_ficha = txt_estado_ficha;
    }

    public String getDepartamento_car() {
        return departamento_car;
    }

    public void setDepartamento_car(String departamento_car) {
        this.departamento_car = departamento_car;
    }

    public String getProvincia_car() {
        return provincia_car;
    }

    public void setProvincia_car(String provincia_car) {
        this.provincia_car = provincia_car;
    }

    public String getDistrito_car() {
        return distrito_car;
    }

    public void setDistrito_car(String distrito_car) {
        this.distrito_car = distrito_car;
    }

    public String getTxt_flag_validar() {
        return txt_flag_validar;
    }

    public void setTxt_flag_validar(String txt_flag_validar) {
        this.txt_flag_validar = txt_flag_validar;
    }

    public String getDni_comisionado() {
        return dni_comisionado;
    }

    public void setDni_comisionado(String dni_comisionado) {
        this.dni_comisionado = dni_comisionado;
    }

    public String getCorreo_comisionado() {
        return correo_comisionado;
    }

    public void setCorreo_comisionado(String correo_comisionado) {
        this.correo_comisionado = correo_comisionado;
    }

    public String getCentro_poblado() {
        return centro_poblado;
    }

    public void setCentro_poblado(String centro_poblado) {
        this.centro_poblado = centro_poblado;
    }

    public String getComunidad_campe() {
        return comunidad_campe;
    }

    public void setComunidad_campe(String comunidad_campe) {
        this.comunidad_campe = comunidad_campe;
    }

    public String getComunidad_indigena() {
        return comunidad_indigena;
    }

    public void setComunidad_indigena(String comunidad_indigena) {
        this.comunidad_indigena = comunidad_indigena;
    }

    public String getDireccion_car() {
        return direccion_car;
    }

    public void setDireccion_car(String direccion_car) {
        this.direccion_car = direccion_car;
    }

    public String getModalidad_car() {
        return modalidad_car;
    }

    public void setModalidad_car(String modalidad_car) {
        this.modalidad_car = modalidad_car;
    }

    public String getAcargode() {
        return acargode;
    }

    public void setAcargode(String acargode) {
        this.acargode = acargode;
    }

    public String getAcargode_otros() {
        return acargode_otros;
    }

    public void setAcargode_otros(String acargode_otros) {
        this.acargode_otros = acargode_otros;
    }

    public String getInmueble_car() {
        return inmueble_car;
    }

    public void setInmueble_car(String inmueble_car) {
        this.inmueble_car = inmueble_car;
    }

    public String getTipo_car() {
        return tipo_car;
    }

    public void setTipo_car(String tipo_car) {
        this.tipo_car = tipo_car;
    }

    public String getPerfil_car() {
        return perfil_car;
    }

    public void setPerfil_car(String perfil_car) {
        this.perfil_car = perfil_car;
    }

    public String getPerfil_car_otros() {
        return perfil_car_otros;
    }

    public void setPerfil_car_otros(String perfil_car_otros) {
        this.perfil_car_otros = perfil_car_otros;
    }

    public Integer getEdadmin() {
        return edadmin;
    }

    public void setEdadmin(Integer edadmin) {
        this.edadmin = edadmin;
    }

    public Integer getEdadmax() {
        return edadmax;
    }

    public void setEdadmax(Integer edadmax) {
        this.edadmax = edadmax;
    }

    public String getEstado_s1() {
        return estado_s1;
    }

    public void setEstado_s1(String estado_s1) {
        this.estado_s1 = estado_s1;
    }

    public Demuna_FichaEntity getCar_ficha() {
        return car_ficha;
    }

    public void setCar_ficha(Demuna_FichaEntity car_ficha) {
        this.car_ficha = car_ficha;
    }

    public Demuna_Ficha_S1Entity getCar_ficha_s1() {
        return car_ficha_s1;
    }

    public void setCar_ficha_s1(Demuna_Ficha_S1Entity car_ficha_s1) {
        this.car_ficha_s1 = car_ficha_s1;
    }

    public Demuna_Ficha_S2Entity getCar_ficha_s2() {
        return car_ficha_s2;
    }

    public void setCar_ficha_s2(Demuna_Ficha_S2Entity car_ficha_s2) {
        this.car_ficha_s2 = car_ficha_s2;
    }

    public Demuna_Ficha_S3Entity getCar_ficha_s3() {
        return car_ficha_s3;
    }

    public void setCar_ficha_s3(Demuna_Ficha_S3Entity car_ficha_s3) {
        this.car_ficha_s3 = car_ficha_s3;
    }

    public Demuna_Ficha_S4Entity getCar_ficha_s4() {
        return car_ficha_s4;
    }

    public void setCar_ficha_s4(Demuna_Ficha_S4Entity car_ficha_s4) {
        this.car_ficha_s4 = car_ficha_s4;
    }

    public Demuna_Ficha_S5Entity getCar_ficha_s5() {
        return car_ficha_s5;
    }

    public void setCar_ficha_s5(Demuna_Ficha_S5Entity car_ficha_s5) {
        this.car_ficha_s5 = car_ficha_s5;
    }

    public Demuna_Ficha_S6Entity getCar_ficha_s6() {
        return car_ficha_s6;
    }

    public void setCar_ficha_s6(Demuna_Ficha_S6Entity car_ficha_s6) {
        this.car_ficha_s6 = car_ficha_s6;
    }

    public Demuna_Ficha_S7Entity getCar_ficha_s7() {
        return car_ficha_s7;
    }

    public void setCar_ficha_s7(Demuna_Ficha_S7Entity car_ficha_s7) {
        this.car_ficha_s7 = car_ficha_s7;
    }

    public Demuna_Ficha_S8Entity getCar_ficha_s8() {
        return car_ficha_s8;
    }

    public void setCar_ficha_s8(Demuna_Ficha_S8Entity car_ficha_s8) {
        this.car_ficha_s8 = car_ficha_s8;
    }

    public Demuna_Ficha_S9Entity getCar_ficha_s9() {
        return car_ficha_s9;
    }

    public void setCar_ficha_s9(Demuna_Ficha_S9Entity car_ficha_s9) {
        this.car_ficha_s9 = car_ficha_s9;
    }

    public Demuna_Ficha_S10Entity getCar_ficha_s10() {
        return car_ficha_s10;
    }

    public void setCar_ficha_s10(Demuna_Ficha_S10Entity car_ficha_s10) {
        this.car_ficha_s10 = car_ficha_s10;
    }

    public String getMsg_modal() {
        return msg_modal;
    }

    public void setMsg_modal(String msg_modal) {
        this.msg_modal = msg_modal;
    }

    public String getTxt_btn_guardado_parcial() {
        return txt_btn_guardado_parcial;
    }

    public void setTxt_btn_guardado_parcial(String txt_btn_guardado_parcial) {
        this.txt_btn_guardado_parcial = txt_btn_guardado_parcial;
    }

    public boolean isFlag_readonly() {
        return flag_readonly;
    }

    public void setFlag_readonly(boolean flag_readonly) {
        this.flag_readonly = flag_readonly;
    }

    public boolean isFlag_ie() {
        return flag_ie;
    }

    public void setFlag_ie(boolean flag_ie) {
        this.flag_ie = flag_ie;
    }

    public boolean isFlag_guardado_parcial() {
        return flag_guardado_parcial;
    }

    public void setFlag_guardado_parcial(boolean flag_guardado_parcial) {
        this.flag_guardado_parcial = flag_guardado_parcial;
    }

    public String getMsg_modal_ie() {
        return msg_modal_ie;
    }

    public void setMsg_modal_ie(String msg_modal_ie) {
        this.msg_modal_ie = msg_modal_ie;
    }

    public String getFlag_modal() {
        return flag_modal;
    }

    public void setFlag_modal(String flag_modal) {
        this.flag_modal = flag_modal;
    }

    public String getCod_unico_ant() {
        return cod_unico_ant;
    }

    public void setCod_unico_ant(String cod_unico_ant) {
        this.cod_unico_ant = cod_unico_ant;
    }

   


}
