package com.uas.repository;

import java.util.List;

import com.uas.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InterventionRepository extends JpaRepository<Intervention, String> {

	@Query("FROM Intervention WHERE etat = 'ajouté'")
	List<Intervention> findAddedIntervention();
	
	@Query("FROM Intervention WHERE etat = 'ajouté'")
	List<Intervention> findAddeddIntervention();
	@Query("FROM Intervention where affectation is not null")
	List<Intervention> findAllInterventionprocessed();
	
	@Query("FROM Intervention where affectation is not null AND client =?1")
	List<Intervention> findAllInterventionprocessedByClient(Client client);
	
	/*@Query("FROM Intervention iv JOIN Diagnostic gn ON iv.id=gn.intervention_id")
	List<Intervention> getInterInDiag();*/
	
	/*@Query("FROM Diagnostic gn JOIN gn.intervention iv WHERE iv.id = gn.intervention")
	List<Intervention> getInterInDiag();*/
	
	
	/*@Query("FROM Materiel mt JOIN mt.marque m JOIN mt.typemateriel tp WHERE m.id = ?2 AND tp.id = ?1 AND mt.model = ?3")
	Materiel getMatrielByTypeAndMarqueAndModel(String idType, String idMarque, String model);
	
	@Query("FROM Diagnostic dn JOIN dn.intervention i WHERE dn.intervention_id")
	List*/


}