package com.uas.services.impl;

import java.time.LocalDate;
import java.util.*;

import com.uas.dto.*;
import com.uas.entity.*;
import com.uas.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

//import com.uas.entity.Diagnostic;
import com.uas.services.InterventionService;

@Service
public class InterventionServiceImpl implements InterventionService {

	private final InterventionRepository interventionRepository;
	@Autowired
	ClientRepository clientRepository;

	/*private final AffectationRepository affectationRepository;*/

	/*private final DiagnosticRepository diagnosticRepository;*/

	public InterventionServiceImpl(InterventionRepository interventionRepository,
			AffectationRepository affectationRepository, DiagnosticRepository diagnosticRepository) {
		this.interventionRepository = interventionRepository;
		/*this.affectationRepository = affectationRepository;
		this.diagnosticRepository = diagnosticRepository;*/
	}

	@Override
	public List<Intervention> getAllIntervention() {
		
		return interventionRepository.findAll();
	}

	@Override
	public Intervention getById(String id) {
		return interventionRepository.findById(id).get();
	}

	@Override
	public Intervention update(Intervention intervention) {
		return interventionRepository.save(intervention);
	}

	@Override
	public Intervention add(Intervention intervention) {
		/*Intervention interventionResult = interventionRepository.save(intervention);
		if (interventionResult != null && interventionResult.getEtat().equalsIgnoreCase("ajouté")) {
			Affectation affectation = new Affectation();
			affectation.addIntervention(interventionResult);
			affectationRepository.save(affectation);
			Diagnostic diagnostic = new Diagnostic();
			diagnostic.addIntervention(interventionResult);
			diagnosticRepository.save(diagnostic);
			
		}*/
		System.out.print(intervention);
		return interventionRepository.save(intervention);
		
	}

	@Override
	public void delete(String id) {
		interventionRepository.deleteById(id);
	}

	@Override
	public List<Intervention> findAddedIntervention() {
		return interventionRepository.findAddedIntervention();
	}
	
	@Override
	public List<Intervention> findAllInterventionprocessed () {
		return interventionRepository.findAllInterventionprocessed();
	}
	
	@Override
	public List<Intervention> findAllInterventionprocessedByClient (String clientId) {
		Client client = clientRepository.findById(clientId).get();
		return interventionRepository.findAllInterventionprocessedByClient(client);
	}

	/*@Override
	public List<Intervention> getIntervInDiag() {
		return interventionRepository.getInterInDiag();
	}*/

}