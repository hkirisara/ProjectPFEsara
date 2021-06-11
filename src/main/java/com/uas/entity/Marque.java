package com.uas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Marque {

	@Id
	@GeneratedValue(generator = "marque-uuid")
	@GenericGenerator(name = "marque-uuid", strategy = "uuid2")
	private String id;

	private String Marque;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMarque() {
		return Marque;
	}

	public void setMarque(String marque) {
		Marque = marque;
	}

	public Marque(String marque) {
		super();
		Marque = marque;
	}

	public Marque() {
		super();

	}

	@Override
	public String toString() {
		return "Marque [id=" + id + ", Marque=" + Marque + "]";
	}

}
