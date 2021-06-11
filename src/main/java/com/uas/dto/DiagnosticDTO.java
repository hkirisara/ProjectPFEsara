package com.uas.dto;

import java.util.List;

public class DiagnosticDTO {

	private String userId;

	private List<String> diagnosticIds;
	 //public List<String> getDiagnosticByinterventionID();

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public List<String> getDiagnosticIds() {
		return diagnosticIds;
	}

	public void setDiagnosticIds(List<String> diagnosticIds) {
		this.diagnosticIds = diagnosticIds;
	}

}
