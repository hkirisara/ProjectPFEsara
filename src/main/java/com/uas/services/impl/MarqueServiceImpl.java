package com.uas.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.uas.entity.Marque;
import com.uas.repository.MarqueRepository;
import com.uas.services.MarqueService;
@Service
public class MarqueServiceImpl implements MarqueService {
	private final MarqueRepository marqueRepository;
	public MarqueServiceImpl (MarqueRepository marqueRepository) {
	this.marqueRepository=marqueRepository;
	
	
}
	@Override
	public List<Marque> getAllMarque() {
	 return marqueRepository.findAll();
	}
	@Override
	public Marque getById(String id) {
		return marqueRepository.findById(id).get();
	}
	@Override
	public Marque update(Marque marque) {
		return marqueRepository.save(marque);
	}
	@Override
	public Marque add(Marque marque) {
		return marqueRepository.save(marque);
	}
	@Override
	public void delete(String id) {
		 marqueRepository.deleteById(id);
		
	}
	
		
	}
