package com.uas.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.uas.entity.Materiel;
import com.uas.repository.MaterielRepository;
import com.uas.services.MaterielService;

@Service
public class MaterielServiceImpl implements MaterielService {
	private final MaterielRepository materielRepository;

	public MaterielServiceImpl(MaterielRepository materielRepository) {
		this.materielRepository = materielRepository;
	}

	@Override
	public List<Materiel> getAllMateriel() {
		return materielRepository.findAll();
	}

	@Override
	public Materiel getById(String id) {
		return materielRepository.findById(id).get();
	}

	@Override
	public Materiel update(Materiel materiel) {
		return materielRepository.save(materiel);
	}

	@Override
	public Materiel add(Materiel materiel) {
		return materielRepository.save(materiel);
	}

	@Override
	public void delete(String id) {
		materielRepository.deleteById(id);

	}

	@Override
	public Materiel getMatrielByTypeAndMarque(String idType, String idMarque) {
		return materielRepository.getMatrielByTypeAndMarque(idType, idMarque);
	}

	@Override
	public Materiel getMatrielByTypeAndMarqueAndModel(String idType, String idMarque, String idModel) {
		return materielRepository.getMatrielByTypeAndMarqueAndModel(idType, idMarque, idModel);
	}
}