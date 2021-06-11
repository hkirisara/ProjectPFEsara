package com.uas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Materiel {

	@Id
	@GeneratedValue(generator = "materiel-uuid")
	@GenericGenerator(name = "materiel-uuid", strategy = "uuid2")
	private String id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "typemateriel_id")
	private Typemateriel typemateriel;

	@ManyToOne(optional = false)
	@JoinColumn(name = "marque_id")
	private Marque marque;

	private String model;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Typemateriel getTypemateriel() {
		return typemateriel;
	}

	public void setTypemateriel(Typemateriel typemateriel) {
		this.typemateriel = typemateriel;
	}

	public Marque getMarque() {
		return marque;
	}

	public void setMarque(Marque marque) {
		this.marque = marque;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

}