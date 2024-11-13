package com.dp.gestioncar.service;

import com.dp.gestioncar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncar.entity.UsuarioEntity;

public interface UsuarioService {

    public UsuarioEntity buscarUsuario(String username);

   public Demuna_EstablecimientosEntity buscarAutoridad(String username);
}


