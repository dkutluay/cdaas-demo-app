package com.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
public class DemoController {

	public static String tower() {
		return "http://asdv004.ux.resource.tld";
	}
	public static String xlrelease() {
		return "https://xlrelease-dev.office.intern";
	}
	public static String artifactory() {
		return "https://artifactory-dev.office.intern";
	}
	public static String pgadmin() {
		return "https://postgres-dev.office.intern/pgadmin4";
	}
	public static String adminer() {
		return "https://postgres-dev.office.intern/adminer";
	}
}
