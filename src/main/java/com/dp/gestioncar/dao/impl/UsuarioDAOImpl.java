package com.dp.gestioncar.dao.impl;

import com.dp.gestioncar.dao.UsuarioDAO;
import com.dp.gestioncar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncar.entity.UsuarioEntity;
import com.dp.gestioncar.repository.Demuna_EstablecimientosRepository;
import com.dp.gestioncar.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioDAOImpl implements UsuarioDAO {

    @Autowired
    UsuarioRepository usuarioRepository;

     @Autowired
    Demuna_EstablecimientosRepository demuna_EstablecimientosRepository;
     
     
    @Override
    public UsuarioEntity buscarUsuario(String username) {
        return usuarioRepository.buscarUsuario(username.trim().toUpperCase());
    }
    
    @Override
    public Demuna_EstablecimientosEntity buscarAutoridad(String username) {
        return demuna_EstablecimientosRepository.buscarAutoridad(username.trim().toUpperCase());
    }

    @Override
    public UsuarioEntity getUsuario(String usuario_usu) {

        return usuarioRepository.getUsuario(usuario_usu.trim().toUpperCase());
    }

    
   
}
