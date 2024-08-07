﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace net_employee_CRUD.Models;

public partial class EmployeeDataContext : DbContext
{
    public EmployeeDataContext()
    {
    }

    public EmployeeDataContext(DbContextOptions<EmployeeDataContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Employees { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
    {
    
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("employee_pkey");

            entity.ToTable("employee");

            entity.HasIndex(e => e.Email, "employee_email_key").IsUnique();

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnName("created_at");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.Salary)
                .HasDefaultValue(0)
                .HasColumnName("salary");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}