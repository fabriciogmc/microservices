/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import javax.servlet.ServletContext;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.UsuarioService;
import model.Usuario;
import java.io.PrintWriter;
/**
 *
 * @author fabriciogmc
 */
@WebServlet({"/insert"})
public class InsertMicroservice extends HttpServlet{
    
    @Override
    public void doGet(HttpServletRequest req,
                       HttpServletResponse res){
        
        String nome = req.getParameter("str_input");		
		UsuarioService us = new UsuarioService();
		Usuario  u_in = new Usuario();
		u_in.setNome(nome);
		Usuario u_out = us.insert(u_in);
		res.addHeader("Access-Control-Allow-Origin", "*");
		try{
		PrintWriter out = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        out.print(u_out.toJSONString());
        out.flush();
		}catch(Exception e){
			System.out.print("Erro escrevendo na resposta");
		}	
        
    }  
}