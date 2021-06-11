package com.uas.entity;


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

import org.hibernate.annotations.GenericGenerator;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Intervention {

	@Id
	@GeneratedValue(generator = "intervention-uuid")
	@GenericGenerator(name = "intervention-uuid", strategy = "uuid2")
	private String id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "client_id", nullable = true)
	private Client client;

	@ManyToOne(optional = false)
	@JoinColumn(name = "typemateriel_id")
	private Typemateriel typemateriel;


	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_affectation")
	private Affectation affectation;

	@JsonIgnore
	@OneToMany(mappedBy = "intervention", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Diagnostic> diagnostics;

	
	private String modele;
	//@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dateajout;

	private String numserie;
	private String panne;
	private String etat;
	private String affect;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "marque_id")
	private Marque marque;
	

	

	public Date getDateajout() {
		return dateajout;
	}

	public void setDateajout(Date dateajout) {
		this.dateajout = dateajout;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Typemateriel getTypemateriel() {
		return typemateriel;
	}

	public void setTypemateriel(Typemateriel typemateriel) {
		this.typemateriel = typemateriel;
	}

	public Affectation getAffectation() {
		return affectation;
	}

	public void setAffectation(Affectation affectation) {
		this.affectation = affectation;
	}

	public Marque getMarque() {
		return marque;
	}

	public void setMarque(Marque marque) {
		this.marque = marque;
	}

	public String getModele() {
		return modele;
	}

	public void setModele(String modele) {
		this.modele = modele;
	}

	

	

	/*public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}*/

	public String getAffect() {
		return affect;
	}

	public void setAffect(String affect) {
		this.affect = affect;
	}

	public String getNumserie() {
		return numserie;
	}

	public void setNumserie(String numserie) {
		this.numserie = numserie;
	}

	public String getPanne() {
		return panne;
	}

	public void setPanne(String panne) {
		this.panne = panne;
	}

	public List<Diagnostic> getDiagnostics() {
		return diagnostics;
	}

	public void setDiagnostics(List<Diagnostic> diagnostics) {
		this.diagnostics = diagnostics;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

}
