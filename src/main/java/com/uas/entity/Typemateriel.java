package com.uas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Typemateriel {

	@Id
	@GeneratedValue(generator = "type-uuid")
	@GenericGenerator(name = "type-uuid", strategy = "uuid2")
	private String id;

	private String Typemateriel;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTypemateriel() {
		return Typemateriel;
	}

	public void setTypemateriel(String typemateriel) {
		Typemateriel = typemateriel;
	}

	public Typemateriel(String typemateriel) {
		super();
		Typemateriel = typemateriel;
	}

	public Typemateriel() {
		super();

	}

	@Override
	public String toString() {
		return "Typemateriel [id=" + id + ", Typemateriel=" + Typemateriel + "]";
	}

}
