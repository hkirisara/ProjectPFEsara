package com.uas.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//import com.uas.dto.DiagnosticDTO;
import com.uas.entity.Diagnostic;
import com.uas.entity.Intervention;
import com.uas.services.DiagnosticService;

@RestController
@RequestMapping("diagnostic")
public class DiagnosticController {
	private final DiagnosticService diagnosticService;

	public DiagnosticController(DiagnosticService diagnosticService) {
		this.diagnosticService = diagnosticService;
}
	@GetMapping
	public List<Diagnostic> getAllIntervention() {
		return diagnosticService.getAllDiagnostic();
	}
	
	@GetMapping("/intervention/{id}")
	public List<Diagnostic> getAllDiagnosticByIntervention(@PathVariable String id) {
		return diagnosticService.findAllByIntervIntervention(id);
	}
	@GetMapping("{id}")
	public Diagnostic getById(@PathVariable String id) {
		return diagnosticService.getById(id);
	}
	
//	@GetMapping("{InterventionId}")
//	public List<Intervention>getDiagnosticByInterventionId(@PathVariable String InterventionId){
//		return diagnosticService.getDiagnosticByInterventionId(InterventionId);
//	}
	
	/*@GetMapping("{InterventionId}")
	public Diagnostic getByInterventionId(@PathVariable String InterventionId) {
		return diagnosticService.getByInterventionId(InterventionId);
	}*/
	
	
	
	

	@PostMapping("{interventionId}")
	public Diagnostic addDiagnostic(@PathVariable String interventionId, @RequestBody Diagnostic diagnostic) {
		return diagnosticService.add(interventionId, diagnostic);
	}

	@PutMapping
	public Diagnostic updateDiagnostic(@RequestBody Diagnostic diagnostic) {
		return diagnosticService.update(diagnostic);
	}

	@DeleteMapping("{id}")
	public void deleteaffectation(@PathVariable String id) {
		diagnosticService.delete(id);
	}
}
