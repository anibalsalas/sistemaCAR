package com.dp.gestioncar.dao;

import com.dp.gestioncar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncar.entity.UsuarioEntity;

public interface UsuarioDAO {
    
    public Demuna_EstablecimientosEntity buscarAutoridad(String username);
       
    public UsuarioEntity buscarUsuario(String username);

    public UsuarioEntity getUsuario(String usuario_usu);

}
