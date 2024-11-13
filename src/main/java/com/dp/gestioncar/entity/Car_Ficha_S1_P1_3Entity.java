
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncar.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.annotations.Formula;

@Entity
@Table(name = "car_ficha_s1_p1_3", schema = "SIGA")
public class Car_Ficha_S1_P1_3Entity implements Serializable {
    
     @EmbeddedId
    private Car_Ficha_S1_P1_3PkEntity car_ficha_s1_p1_3pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
    
    @Column(name = "p1_3_grupo_ocupa")
   private String p1_3_grupo_ocupa;
    
    private Integer p1_3_peruanas;
    private Integer p1_3_extranjeras;
    private Integer p1_3_peruanos;
   private Integer p1_3_extranjeros;
    private Integer p1_3_subtotal;
     private Integer p1_3_total;
   


    public Car_Ficha_S1_P1_3Entity() {
    }

    public Car_Ficha_S1_P1_3PkEntity getCar_ficha_s1_p1_3pk() {
        return car_ficha_s1_p1_3pk;
    }

    public void setCar_ficha_s1_p1_3pk(Car_Ficha_S1_P1_3PkEntity car_ficha_s1_p1_3pk) {
        this.car_ficha_s1_p1_3pk = car_ficha_s1_p1_3pk;
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

    public String getP1_3_grupo_ocupa() {
        return p1_3_grupo_ocupa;
    }

    public void setP1_3_grupo_ocupa(String p1_3_grupo_ocupa) {
        this.p1_3_grupo_ocupa = p1_3_grupo_ocupa;
    }

    public Integer getP1_3_peruanas() {
        return p1_3_peruanas;
    }

    public void setP1_3_peruanas(Integer p1_3_peruanas) {
        this.p1_3_peruanas = p1_3_peruanas;
    }

    public Integer getP1_3_extranjeras() {
        return p1_3_extranjeras;
    }

    public void setP1_3_extranjeras(Integer p1_3_extranjeras) {
        this.p1_3_extranjeras = p1_3_extranjeras;
    }

    public Integer getP1_3_peruanos() {
        return p1_3_peruanos;
    }

    public void setP1_3_peruanos(Integer p1_3_peruanos) {
        this.p1_3_peruanos = p1_3_peruanos;
    }

    public Integer getP1_3_extranjeros() {
        return p1_3_extranjeros;
    }

    public void setP1_3_extranjeros(Integer p1_3_extranjeros) {
        this.p1_3_extranjeros = p1_3_extranjeros;
    }

    public Integer getP1_3_subtotal() {
        return p1_3_subtotal;
    }

    public void setP1_3_subtotal(Integer p1_3_subtotal) {
        this.p1_3_subtotal = p1_3_subtotal;
    }

    public Integer getP1_3_total() {
        return p1_3_total;
    }

    public void setP1_3_total(Integer p1_3_total) {
        this.p1_3_total = p1_3_total;
    }

    
    
    
    
    
}