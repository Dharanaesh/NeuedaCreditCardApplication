package com.neuedatraining.CreditCardApplication.dto;

public class ProfessionSales {
    private String Job;
    private double sales;

    public String getProfession() {
        return Job;
    }

    public void setProfession(String profession) {
        this.Job = profession;
    }

    public double getSales() {
        return sales;
    }

    public void setSales(double sales) {
        this.sales = sales;
    }
}
