package com.uas.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Affectation {
	@Id
	@GeneratedValue(generator = "affectation-uuid")
	@GenericGenerator(name = "affectation-uuid", strategy = "uuid2")
	private String id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "certification_id")
	private Utilisateur utilisateur;
	@JsonIgnore
	@OneToMany(mappedBy = "affectation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Intervention> interventions = new ArrayList<>();

	private Date dateaffectation;

	public void addIntervention(Intervention intervention) {
		this.interventions.add(intervention);
		intervention.setAffectation(this);
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public List<Intervention> getInterventions() {
		return interventions;
	}

	public void setInterventions(List<Intervention> interventions) {
		this.interventions = interventions;
	}

	public Date getDate() {
		return dateaffectation;
	}

	public void setDate(Date dateaffectation) {
		this.dateaffectation = dateaffectation;
	}

}
