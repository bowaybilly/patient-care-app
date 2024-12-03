namespace PatientCareApi.Api
{
    using Microsoft.OpenApi.Models;
    using Swashbuckle.AspNetCore.SwaggerGen;
    using System.Collections.Generic;

    public class SwaggerODataOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            if (operation.Parameters == null)
            {
                operation.Parameters = new List<OpenApiParameter>();
            }

            // Add common OData query parameters
            operation.Parameters.Add(new OpenApiParameter
            {
                Name = "$filter",
                In = ParameterLocation.Query,
                Description = "Filter the results using OData syntax. Example: `contains(Name,'John')`",
                Required = false,
                Schema = new OpenApiSchema { Type = "string" }
            });

            operation.Parameters.Add(new OpenApiParameter
            {
                Name = "$orderby",
                In = ParameterLocation.Query,
                Description = "Sort the results. Example: `Name asc` or `Date desc`",
                Required = false,
                Schema = new OpenApiSchema { Type = "string" }
            });

            operation.Parameters.Add(new OpenApiParameter
            {
                Name = "$select",
                In = ParameterLocation.Query,
                Description = "Select specific fields. Example: `Id,Name`",
                Required = false,
                Schema = new OpenApiSchema { Type = "string" }
            });

            operation.Parameters.Add(new OpenApiParameter
            {
                Name = "$top",
                In = ParameterLocation.Query,
                Description = "Limit the number of results. Example: `5`",
                Required = false,
                Schema = new OpenApiSchema { Type = "integer" }
            });

            operation.Parameters.Add(new OpenApiParameter
            {
                Name = "$skip",
                In = ParameterLocation.Query,
                Description = "Skip a number of results. Example: `10`",
                Required = false,
                Schema = new OpenApiSchema { Type = "integer" }
            });

            operation.Parameters.Add(new OpenApiParameter
            {
                Name = "$count",
                In = ParameterLocation.Query,
                Description = "Include a count of the total results. Example: `true`",
                Required = false,
                Schema = new OpenApiSchema { Type = "boolean" }
            });
        }
    }

}