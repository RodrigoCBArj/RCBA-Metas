package br.com.rodrigocbarj.rcbametas.services;

import br.com.rodrigocbarj.rcbametas.entities.Sale;
import br.com.rodrigocbarj.rcbametas.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public List<Sale> findSales() {
        return repository.findAll();
    }
}
