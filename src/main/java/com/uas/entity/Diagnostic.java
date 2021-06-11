package com.uas.entity;


import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Diagnostic {
	@Id
	@GeneratedValue(generator = "diagnostic-uuid")
	@GenericGenerator(name = "diagnostic-uuid", strategy = "uuid2")
	private String id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "role_id")
	private Utilisateur utilisateur;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "intervention_id")
	private Intervention intervention;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "offre_id")
	private Offre offre;

	private Date datediagnostic;
	private String diagnostic;
	private String piecederechange;
	private double nombredepiece;
	private double tva;
	private double puht;
	private double puhtr;
	private double mnttva;
	private double puttc;
	private double ptttc;
	private double remise;

	
	public double getTva () {
		return tva;
	}
	
	public void setTva (double tva) {
		this.tva = tva;
	}
	
	public double getPuht () {
		return puht;
	}
	
	public void setPuht (double puht) {
		this.puht = puht;
	}
	
	public double getPuhtr () {
		return puhtr;
	}
	
	public void setPuhtr (double puhtr) {
		this.puhtr = puhtr;
	}
	
	public double getMnttva () {
		return mnttva;
	}
	
	public void setMnttva (double mnttva) {
		this.mnttva = mnttva;
	}
	
	public double getPuttc () {
		return puttc;
	}
	
	public void setPuttc (double puttc) {
		this.puttc = puttc;
	}
	
	public double getPtttc () {
		return ptttc;
	}
	
	public void setPtttc (double ptttc) {
		this.ptttc = ptttc;
	}
	
	public double getRemise () {
		return remise;
	}
	
	public void setRemise (double remise) {
		this.remise = remise;
	}
	
	public Offre getOffre () {
		return offre;
	}
	
	
	
	public void setOffre (Offre offre) {
		this.offre = offre;
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

	public Intervention getIntervention() {
		return intervention;
	}

	public void setIntervention(Intervention intervention) {
		this.intervention = intervention;
	}

	public Date getDatediagnostic() {
		return datediagnostic;
	}

	public void setDatediagnostic(Date datediagnostic) {
		this.datediagnostic = datediagnostic;
	}

	public String getDiagnostic() {
		return diagnostic;
	}

	public void setDiagnostic(String diagnostic) {
		this.diagnostic = diagnostic;
	}

	public String getPiecederechange() {
		return piecederechange;
	}

	public void setPiecederechange(String piecederechange) {
		this.piecederechange = piecederechange;
	}

	public double getNombredepiece() {
		return nombredepiece;
	}

	public void setNombredepiece(double nombredepiece) {
		this.nombredepiece = nombredepiece;
	}

}
