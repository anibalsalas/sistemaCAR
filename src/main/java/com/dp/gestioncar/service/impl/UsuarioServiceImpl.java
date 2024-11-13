package com.dp.gestioncar.service.impl;

import com.dp.gestioncar.dao.UsuarioDAO;
import com.dp.gestioncar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncar.entity.UsuarioEntity;
import com.dp.gestioncar.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioDAO usuarioDAO;

    @Override
    public UsuarioEntity buscarUsuario(String username) {
        return usuarioDAO.buscarUsuario(username);
    }
    
    @Override
    public Demuna_EstablecimientosEntity buscarAutoridad(String username) {
        return usuarioDAO.buscarAutoridad(username);
    }

    
    
}
