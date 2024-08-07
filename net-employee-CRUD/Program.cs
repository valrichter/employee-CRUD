using net_employee_CRUD.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRouting(routing => routing.LowercaseUrls = true);

builder.Services.AddDbContext<EmployeeDataContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("StringSQL"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("PoliticCORS", app =>
    {
        app.AllowAnyOrigin().AllowAnyHeader().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("PoliticCORS");


app.UseAuthorization();

app.MapControllers();

app.Run();
