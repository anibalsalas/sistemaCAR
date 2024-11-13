package com.dp.gestioncar.entity;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "car_ficha_s1", schema = "SIGA")
public class Demuna_Ficha_S1Entity implements Serializable {
     
    @Id
    
    private Integer id_ficha_s1;
    private Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s1x;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
  
   private Integer p1_1_capacidad ;
   private Integer p1_1_total;
    private Integer p1_3_total;
   private String p1_4;
   private String p1_4_detalle;

    private Integer p1_5_f_bolivia;
    private Integer p1_5_f_chile;
    private Integer p1_5_f_colo;
    private Integer p1_5_f_ecu;
    private Integer p1_5_f_vene;
    private Integer p1_5_f_otro;
    private Integer p1_5_f_total;
    private Integer p1_5_m_bolivia;
    private Integer p1_5_m_chile;
    private Integer p1_5_m_colo;
    private Integer p1_5_m_ecu;
    private Integer p1_5_m_vene;
    private Integer p1_5_m_otro;
    private Integer p1_5_m_total;
    private Integer p1_5_subtotal_bolivia;
    private Integer p1_5_subtotal_chile;
    private Integer p1_5_subtotal_colo;
    private Integer p1_5_subtotal_ecu;
    private Integer p1_5_subtotal_vene;
    private Integer p1_5_subtotal_otro;
    private Integer p1_5_total;
    private Integer p1_6;

//        @Formula("(select count(ea.id_archivo) \n"
//            + "from siga.demuna_archivo ea \n"
//            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S2' and ea.nom_campo = 'S2_ARCH')")
//    private Integer s2_arch_id_archivo;
//   
//
//         @Formula("(select count(ea.id_archivo) \n"
//            + "from siga.demuna_archivo ea \n"
//            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S2' and ea.nom_campo = 'S212_ARCH')")
//    private Integer s212_arch_id_archivo;
//         
//         
//           @Formula("(select count(ea.id_archivo) \n"
//            + "from siga.demuna_archivo ea \n"
//            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S2' and ea.nom_campo = 'S251_ARCH')")
//    private Integer s251_arch_id_archivo;
    
    
    
    
}


