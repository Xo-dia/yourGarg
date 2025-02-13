package co.simplon.yourgardenbusiness.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lands")
public class LandController {
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public String getLands() {
		return "leo";
	}
	

}
