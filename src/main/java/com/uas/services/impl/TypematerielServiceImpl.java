package com.uas.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.uas.entity.Typemateriel;
import com.uas.repository.TypematerielRepository;
import com.uas.services.TypematerielService;

@Service
public class TypematerielServiceImpl implements TypematerielService {
	private final TypematerielRepository typematerielRepository;
	public TypematerielServiceImpl (TypematerielRepository typematerielRepository) {
	this.typematerielRepository=typematerielRepository;

}
	@Override
	public List<Typemateriel> getAllTypemateriel() {
		return typematerielRepository.findAll();
	}
	@Override
	public Typemateriel getById(String id) {
		return typematerielRepository.findById(id).get();
	}
	@Override
	public Typemateriel update(Typemateriel typemateriel) {
		return typematerielRepository.save(typemateriel);
	}
	@Override
	public Typemateriel add(Typemateriel typemateriel) {
		return typematerielRepository.save(typemateriel);
	}
	@Override
	public void delete(String id) {
		 typematerielRepository.deleteById(id);
		
	}
}