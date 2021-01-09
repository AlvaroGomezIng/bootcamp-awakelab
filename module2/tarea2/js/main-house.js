var table = $("#house-data");
// Crear etiqueta "fila". En jQuery la etiqueta se llama tal como aparece en HTML */
var trHeader = $("<tr>");
trHeader.addClass("bg-title");
// Insertar la etiqueta "<tr>" (child) dentro de la etiqueta tabla (parent)
table.append(trHeader);

// Crear etiqueta "celda tipo encabezado" que irá en primera fila
var thName = $("<th>"); /* también funciona con $("</th>"), se recomienda la primera */
var thParty = $("<th>");
var thState = $("<th>");
var thSeniority = $("<th>");
var thVotesPct = $("<th>");

// Estilo a Table Header
thName.css("text-align", "center");
thParty.css("text-align", "center");
thState.css("text-align", "center");
thSeniority.css("text-align", "center");
thVotesPct.css("text-align", "center");

// Editar contenido celda para que aparezca el tìtulo
thName.text("Nombre completo");
thParty.text("Partido");
thState.text("Estado");
thSeniority.text("Antigüedad (años)");
thVotesPct.text("Votos con partido (%)");

// Insertar etiquetas "<th>" (child) dentro de la etiqueta "<tr>" para que queden en la 1ª fila
trHeader.append(thName);
trHeader.append(thParty);
trHeader.append(thState);
trHeader.append(thSeniority);
trHeader.append(thVotesPct);

if (dataHouse.status == "OK") {
    // condición para que "results" no sea null y sea True (que existan datos)
    if (dataHouse.results) {
        // condición para que "members" no sea null y sea True (que existan datos)
        if (dataHouse.results[0].members) {
            for (var i = 0; i < dataHouse.results[0].members.length; i++) {
                // crear fila de cada iteración (incluye todas las celdas de la fila)
                var tr = $("<tr>");
                if (i%2 == 0) {
                    tr.addClass("bg-house1");
                } else {tr.addClass("bg-house2")}
                // agregar child "<tr>" a la tabla para que aparezcan las filas siguientes a la primera (trHeader)
                table.append(tr);

                // crear celda para cada dato
                var tdName = $("<td>");
                var tdParty = $("<td>");
                var tdState = $("<td>");
                var tdSeniority = $("<td>");
                var tdVotesPct = $("<td>");

                // obtener contenido de los datos y guardarlos en variable
                //      nombre
                midName = dataHouse.results[0].members[i].middle_name != null ? " " + dataHouse.results[0].members[i].middle_name : ""
                var fullName = dataHouse.results[0].members[i].last_name + ", " + dataHouse.results[0].members[i].first_name + midName; // Revisar los "null" del middle name
                //      partido
                var party = dataHouse.results[0].members[i].party;
                //      estado
                var state = dataHouse.results[0].members[i].state;
                //      antigüedad
                var seniority = dataHouse.results[0].members[i].seniority;
                //      % votos partido
                var votesPct = dataHouse.results[0].members[i].votes_with_party_pct + "%";

                // editar texto de la celda para que muestre el contenido del dato
               /*  tdName.text(fullName); */
                var anchor = $("<a>");
                url = dataHouse.results[0].members[i].url;
                if (url) {anchor.attr("href", url)} else {anchor.attr("href", "#")};
                
                anchor.attr("target", "_blank");
                anchor.text(fullName);
                tdName.append(anchor);

                tdParty.text(party);
                tdState.text(state);
                tdSeniority.text(seniority);
                tdVotesPct.text(votesPct);

                // agregar celda (child) a la fila (parent) de cada iteración
                tr.append(tdName);
                tr.append(tdParty);
                tr.append(tdState);
                tr.append(tdSeniority);
                tr.append(tdVotesPct);

                // dar ancho a columnas
                tdName.css({"width": "40%", "text-align": "center"});
                tdParty.css({"width": "10%", "text-align": "center"});
                tdState.css({"width": "10%", "text-align": "center"});
                tdSeniority.css({"width": "20%", "text-align": "center"});
                tdVotesPct.css({"width": "20%", "text-align": "center"});
            }
        }
    }
}
