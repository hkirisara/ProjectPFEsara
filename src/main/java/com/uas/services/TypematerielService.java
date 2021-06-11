package com.uas.services;

import java.util.List;

import com.uas.entity.Typemateriel;


public interface TypematerielService {
	
	public List<Typemateriel> getAllTypemateriel();

	public Typemateriel getById(String id);

	public Typemateriel update(Typemateriel typemateriel);

	public Typemateriel add(Typemateriel typemateriel);

	public void delete(String id);
}
