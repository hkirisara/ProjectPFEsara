package com.uas.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.uas.entity.Offre;
import com.uas.repository.OffreRepository;
import com.uas.services.OffreService;

@Service
public class OffreServiceImpl implements OffreService {
	private final OffreRepository offreRepository;
	
	public OffreServiceImpl(OffreRepository offreRepository) {
		this.offreRepository = offreRepository;
	}

	@Override
	public List<Offre> getAllOffre() {
		return offreRepository.findAll();
	}

	@Override
	public Offre getById(String id) {
		return offreRepository.findById(id).get();
	}

	@Override
	public Offre update(Offre offre) {
		return offreRepository.save(offre);
	}

	@Override
	public Offre add(Offre offre) {
		return offreRepository.save(offre);
	}

	@Override
	public void delete(String id) {
		offreRepository.deleteById(id);
		
	}

	/*@Override
	public Offre getOffreByClient(String idClient) {
		return offreRepository.getOffreByClient(idClient);
	}*/

	

	
	
	

}
