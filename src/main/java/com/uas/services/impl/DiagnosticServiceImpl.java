package com.uas.services.impl;

import java.util.List;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.uas.dto.DiagnosticDTO;

import com.uas.entity.Diagnostic;
import com.uas.entity.Intervention;
import com.uas.entity.Utilisateur;

import com.uas.repository.DiagnosticRepository;
import com.uas.repository.InterventionRepository;
import com.uas.repository.UtilisateurRepository;
import com.uas.services.DiagnosticService;

@Service
public class DiagnosticServiceImpl implements DiagnosticService {
	private final DiagnosticRepository diagnosticRepository;
	private final UtilisateurRepository userRepo;
	private final InterventionRepository interventionRepository;

	public DiagnosticServiceImpl(DiagnosticRepository diagnosticRepository, UtilisateurRepository userRepo,
			InterventionRepository interventionRepository) {
		this.diagnosticRepository = diagnosticRepository;
		this.userRepo = userRepo;
		this.interventionRepository = interventionRepository;
	}

	@Override
	public List<Diagnostic> getAllDiagnostic() {
		return diagnosticRepository.findAll();
	}

	@Override
	public Diagnostic getById(String id) {
		return diagnosticRepository.findById(id).get();
	}

	@Override
	public Diagnostic update(Diagnostic diagnostic) {
		return diagnosticRepository.save(diagnostic);
	}

	@Override
	public Diagnostic add(String interventionId, Diagnostic diagnostic) {
		Optional<Intervention> interventionOptional = interventionRepository.findById(interventionId);
		if (interventionOptional.isPresent()) {
			diagnostic.setIntervention(interventionOptional.get());
		}
		return diagnosticRepository.save(diagnostic);
	}

	@Override
	public void delete(String id) {
		diagnosticRepository.deleteById(id);

	}
	
	@Override
	public List<Diagnostic> findAllByIntervIntervention (String interventionId) {
		Intervention intervention = interventionRepository.findById(interventionId).get();
		return diagnosticRepository.findAllByIntervention(intervention);
	}
	
	//	@Override
//	public List<Intervention> getDiagnosticByInterventionId(String InterventionId) {
//		return diagnosticRepository.getDiagnosticByInterventionId(InterventionId);
//	}

	/*@Override
	public Diagnostic add(DiagnosticDTO diagnosticDTO) {
		if (diagnosticDTO.getDiagnosticIds() != null) {
			for (String el : diagnosticDTO.getDiagnosticIds()) {
				Diagnostic diagnostic = diagnosticRepository.findById(el).get();
				Utilisateur user = null;
				if (diagnosticDTO.getUserId() != null) {
					Optional<Utilisateur> userOptional = userRepo.findById(diagnosticDTO.getUserId());
					user = userOptional.get();
				}
				diagnostic.setUtilisateur(user);
				diagnosticRepository.save(diagnostic);
			}
		}
		return null;*/
	

	/*@Override
	public Diagnostic getByInterventionId(String InterventionId) {
		List<Diagnostic> list = diagnosticRepository.findAll();
		for(Diagnostic diag : list) {
			if(diag.getIntervention().getId().equals(InterventionId))
				return diag;
		
		}
		return null;
	}*/

}
