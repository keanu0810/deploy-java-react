package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HiController {
	@GetMapping("/api/hi")
	public String sayHi() {
		return "오신 것을 환영합니다.";
	}

}
