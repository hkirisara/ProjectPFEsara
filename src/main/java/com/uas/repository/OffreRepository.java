package com.uas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.uas.entity.Offre;



public interface OffreRepository extends JpaRepository<Offre,String> {

	/*@Query("FROM Materiel mt JOIN mt.marque m JOIN mt.typemateriel tp WHERE m.id = ?2 AND tp.id = ?1")
	Materiel getMatrielByTypeAndMarque(String idType, String idMarque);*/

}
