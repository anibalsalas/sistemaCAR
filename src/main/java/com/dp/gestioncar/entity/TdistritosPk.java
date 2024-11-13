package com.dp.gestioncar.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author ccortez
 * @version
 * 001 ccortez ccortez 03/03/2024 Inicio
 * 
 */

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TdistritosPk implements Serializable {
    
    @Column(name="CODI_DEPA_DPT")
    private String codiDepaDpt;
    
    @Column(name="CODI_PROV_TPR")
    private String codiProvTpr;
    
    @Column(name="CODI_DIST_TDI")
    private String codiDistTdi;

}
