/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncar.entity;


import java.io.Serializable;
import javax.persistence.Embeddable;

@Embeddable
public class Car_Ficha_S1_P1_2PkEntity implements Serializable {

    private Integer id;
    private Integer id_ficha;

    public Car_Ficha_S1_P1_2PkEntity() {
    }

    public Car_Ficha_S1_P1_2PkEntity(Integer id, Integer id_ficha) {
        this.id = id;
        this.id_ficha = id_ficha;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_ficha() {
        return id_ficha;
    }

    public void setId_ficha(Integer id_ficha) {
        this.id_ficha = id_ficha;
    }

}