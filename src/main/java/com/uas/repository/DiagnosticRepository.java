package com.uas.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.uas.entity.Diagnostic;
import com.uas.entity.Intervention;


public interface DiagnosticRepository extends JpaRepository<Diagnostic, String> {

//
//	@Query("SELECT Intervention FROM Diagnostic diag ")
//	 List<Intervention> getDiagnosticByInterventionId(String InterventionId);
	List<Diagnostic> findAllByIntervention(Intervention intervention);
}
