/*
** This file contains the persistence class.
** Each class attribute is known as persistence attribute
 */
package model;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

/**
 *
 * @author fabricio
 */

public class UsuarioService { //persistence class
    
	public Usuario insert(Usuario u){
            EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistencia_simples");        
            EntityManager em = emf.createEntityManager();
			Usuario un = u;
			em.getTransaction().begin();
			em.persist(un);
			em.getTransaction().commit();
			Usuario uf = em.find(Usuario.class, un.getId());
            em.close();
            emf.close();
            return uf;            
	}	
}
