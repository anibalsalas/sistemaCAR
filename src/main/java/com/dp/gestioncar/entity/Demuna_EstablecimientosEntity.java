package com.dp.gestioncar.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "car_padron", schema = "SIGA")
public class Demuna_EstablecimientosEntity implements Serializable {

   
   @Id
    private Integer id_sestablecmnt;
    private String cod_unico;
    private String nom_entidad;
    private String des_departament;
    private String des_provincia;
    private String des_distrito;
    private String nom_autoridad;
    
    private String dni;
      
    private String ubigeo;
    
    private String direccion;
    private String telefono;
    private String correo;
    private String nresolu;

    private String coddptox;
    private String codprovx;
    private String coddistx;
   private String c_tipo_entidad; 
   
   
    public Demuna_EstablecimientosEntity() {
    }
    
    // Constructor adicional que acepta dos parámetros de tipo String
    public Demuna_EstablecimientosEntity(String nom_entidad, String cod_unico) {
        this.nom_entidad = nom_entidad;
        this.cod_unico = cod_unico;
    }
 
    
    // Getters y Setters
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

    public String getNom_entidad() {
        return nom_entidad;
    }

    public void setNom_entidad(String nom_entidad) {
        this.nom_entidad = nom_entidad;
    }

    public String getDes_departament() {
        return des_departament;
    }

    public void setDes_departament(String des_departament) {
        this.des_departament = des_departament;
    }

    public String getDes_provincia() {
        return des_provincia;
    }

    public void setDes_provincia(String des_provincia) {
        this.des_provincia = des_provincia;
    }

    public String getDes_distrito() {
        return des_distrito;
    }

    public void setDes_distrito(String des_distrito) {
        this.des_distrito = des_distrito;
    }

    public String getNom_autoridad() {
        return nom_autoridad;
    }

    public void setNom_autoridad(String nom_autoridad) {
        this.nom_autoridad = nom_autoridad;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getUbigeo() {
        return ubigeo;
    }

    public void setUbigeo(String ubigeo) {
        this.ubigeo = ubigeo;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getNresolu() {
        return nresolu;
    }

    public void setNresolu(String nresolu) {
        this.nresolu = nresolu;
    }

    public String getCoddptox() {
        return coddptox;
    }

    public void setCoddptox(String coddptox) {
        this.coddptox = coddptox;
    }

    public String getCodprovx() {
        return codprovx;
    }

    public void setCodprovx(String codprovx) {
        this.codprovx = codprovx;
    }

    public String getCoddistx() {
        return coddistx;
    }

    public void setCoddistx(String coddistx) {
        this.coddistx = coddistx;
    }

    public String getC_tipo_entidad() {
        return c_tipo_entidad;
    }

    public void setC_tipo_entidad(String c_tipo_entidad) {
        this.c_tipo_entidad = c_tipo_entidad;
    }

    
}
