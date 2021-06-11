package com.uas.services;

import java.util.List;


import com.uas.entity.Diagnostic;
import com.uas.entity.Intervention;


public interface DiagnosticService {
	public List<Diagnostic> getAllDiagnostic();

	public Diagnostic getById(String id);
//	public List<Intervention> getDiagnosticByInterventionId(String InterventionId);
	
	public Diagnostic update(Diagnostic diagnostic);

	public Diagnostic add(String interventionId, Diagnostic diagnostic);
	/*public Diagnostic add(DiagnosticDTO diagnostic);*/
	public void delete(String id);
	
	List<Diagnostic> findAllByIntervIntervention(String interventionId);
	
//	Diagnostic calculPrixDiagnostic(String diagnosticId);
	
}
