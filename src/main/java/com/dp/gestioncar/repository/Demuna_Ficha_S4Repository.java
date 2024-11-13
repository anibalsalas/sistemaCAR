

package com.dp.gestioncar.repository;

import com.dp.gestioncar.entity.Demuna_Ficha_S4Entity;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Demuna_Ficha_S4Repository extends JpaRepository<Demuna_Ficha_S4Entity, Integer> {

    @Query(value = "select nvl(max(id_ficha_s4),0) + 1 from siga.car_ficha_s4", nativeQuery = true)
    public Integer generarIdFichaS4();

    @Query(value = "select f from Demuna_Ficha_S4Entity f where f.id_ficha=:id_ficha")
    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(@Param("id_ficha") Integer id_ficha);

    @Transactional
    @Modifying
    @Query(value = "update siga.car_ficha_s4 f set f.estado_s4 = '1', f.usu_valida=:usu_valida, f.fch_valida=sysdate where f.id_ficha=:id_ficha and f.id_ficha_s4=:id_ficha_s4", nativeQuery = true)
    public void validarSec4(@Param("id_ficha") Integer id_ficha,@Param("id_ficha_s4") Integer id_ficha_s4, @Param("usu_valida") String usu_valida);
}




   