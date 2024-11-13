
var requestContextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var urlx = requestContextPath + "/dp/ficha/formulario";


$(document).ready(function () {

    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location = requestContextPath + '/406';
            }
        }
    });

    $('#cod_unico').css('pointer-events', 'none');

    iniciar_fecha();
    mostrar_modal_info();
    aplicarExpresionRegularTexto();
    aplicarExpresionRegular();
 
     calcularSumaP1_3();
    //validarRadios(); 
    //validarCheckboxes(); 
    //inicializarValidacion(); 
    //colocarRequiredEnInputs();
    

    aplicarFormatoFecha();
    aplicarFormatoFecha2();

   

    $(document).on('change', '#cod_unico', function () {
        buscar_establecimiento_demuna();
    });


    $(document).on('change', '#codi_depa_dpt', function () {
        buscar_municipalidades();
    });
    
   $(document).on('submit', '#frm_mdl_sec4_3', function (event) {
        event.preventDefault();

        guardar_modal_sec4_3();

    });
    
    
    document.querySelectorAll('.no-required').forEach(function (el) {
        el.removeAttribute('required');
    });


 $(document).on('submit', '#frm_mdl_sec5_1', function (event) {
        event.preventDefault();

        guardar_modal_sec5_1();

    });
    
    
$(document).on('submit', '#frm_mdl_sec5_2', function (event) {
        event.preventDefault();
        guardar_modal_sec5_2();

    });

$(document).on('submit', '#frm_mdl_sec1_2', function (event) {
        event.preventDefault();
        guardar_modal_sec1_2();

    });
    
$(document).on('submit', '#frm_mdl_sec1_3', function (event) {
        event.preventDefault();
        guardar_modal_sec1_3();

    });
    
$(document).on('submit', '#frm_mdl_sec5_4', function (event) {
        event.preventDefault();
        guardar_modal_sec5_4();

    });
    
$(document).on('submit', '#frm_mdl_sec5_5', function (event) {
        event.preventDefault();
        guardar_modal_sec5_5();

    });
    
     
$(document).on('submit', '#frm_mdl_sec5_6', function (event) {
        event.preventDefault();
        guardar_modal_sec5_6();

    });   
    
$(document).on('submit', '#frm_mdl_sec5_7', function (event) {
        event.preventDefault();
        guardar_modal_sec5_7();

    });    
    
    $(document).on('submit', '#frm_mdl_sec5_8', function (event) {
        event.preventDefault();
        guardar_modal_sec5_8();

    });
    
    $(document).on('submit', '#frm_mdl_sec5_9', function (event) {
        event.preventDefault();
        guardar_modal_sec5_9();

    });
    
      $(document).on('submit', '#frm_mdl_sec5_10', function (event) {
        event.preventDefault();
        guardar_modal_sec5_10();

    });
    
    $(document).on('submit', '#frm_mdl_sec5_31', function (event) {
        event.preventDefault();
        guardar_modal_sec5_31();

    });
    
});




function iniciar_fecha() {
    var rol_usuario = $("#rol_usuario").val();
    var id_ficha = $("#id_ficha").val();

    if (id_ficha !== "") {
        
      
        
        
        const fecha_hora = new tempusDominus.TempusDominus(document.getElementById('fch_supervision'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });
    }
}



//
function mostrar_modal_info() {

    var flag_modal = $("#flag_modal").val();

    if (flag_modal === "S") {
        $("#mdl_info_ficha").modal("show");
        
        setTimeout(function() {
            $("#mdl_info_ficha").modal("hide");
        }, 2000);

        
    }
}



function guardar_total() {

    $(".accordion-button").removeClass("collapsed");
    $(".accordion-collapse").removeClass("show").addClass("show");

}

function validacion_final() {

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

}

function validarNoNegativo(input) {
        // Si el valor es menor que 0, lo cambia a 0
        if (input.value < 0) {
            input.value = 0;
        }
    }

function guardar_parcial_1(elem) {
    
    var btn_guardado_parcial = elem.id;

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//////////////////////////////////////////////////////////
    var estado = $("#estado").val();
    var no_pudo_aplicar_ficha = $("#no_implementado").is(":checked");
    if (no_pudo_aplicar_ficha) {
        // Si está marcado, establecer el estado como completo
        estado = "C";
    } else {
        // Si no está marcado, mantener el estado actual
        estado = estado === 'C' ? "C" : "I";
    }
/////////////////////////////////////////////////////////
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
   
    try {
        // Verificar y mostrar los datos antes de enviar el formulario
        var formData = $("#frm_fichas").serializeArray();    
        $("#frm_fichas").submit();
    } catch (error) {
       
    }

    $("#frm_fichas").submit();
}


function guardar_parcial_2(elem) {
    
    var btn_guardado_parcial = elem.id;
console.log("btn_guardado_parcial" + btn_guardado_parcial);
    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//////////////////////////////////////////////////////////
    var estado = $("#estado").val();
    console.log("estado1"+ estado);
      var no_pudo_aplicar_ficha = $('#no_funciona').is(':checked');
    alert(no_pudo_aplicar_ficha);
    if (no_pudo_aplicar_ficha) {
        // Si está marcado, establecer el estado como completo
        estado = "C";
        
        alert( estado);
    } else {
        // Si no está marcado, mantener el estado actual
        estado = estado === 'C' ? "C" : "I";
        
          console.log("estado3"+ estado);
    }
/////////////////////////////////////////////////////////
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
   
    try {
        // Verificar y mostrar los datos antes de enviar el formulario
        var formData = $("#frm_fichas").serializeArray();    
        $("#frm_fichas").submit();
    } catch (error) {
       
    }

    $("#frm_fichas").submit();
}
//

function enableValidateButton() {
        const validateButton = document.getElementById('btn_validar_sec_1');
        validateButton.disabled = false;
    }
    
function guardar_parcial(elem) {
console.log("llego aqui guardar parcial");

    var btn_guardado_parcial = elem.id;

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    var estado = $("#estado").val();
    estado = estado === 'C' ? "C" : "I";
    
     console.log("estado"+ estado);
     
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
     try {
        var formData = $("#frm_fichas").serializeArray();
        console.log("Datos del formulario:", formData);

        $("#frm_fichas").submit();
    } catch (error) {
        console.error("Error al guardar parcialmente:", error);
        alert("Ocurrió un error al guardar parcialmente. Por favor, inténtalo de nuevo.");
    }
    $("#frm_fichas").submit();
    
  }

function buscar_establecimiento_demuna() {
    console.log("entro a la funcion");

    var cod_unicox = $("#cod_unicox").val();

    console.log("codigo :" + cod_unicox);

    if (cod_unicox !== "") {
        $("#btn_buscar").prop("disabled", true);
        $("#btn_buscar").text('');
        $("#btn_buscar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');

        $(".search_ie").prop("disabled", true);

        $.ajax({
            url: urlx + "/ajaxBuscarEESS",
            type: 'POST',
            data: {cod_unico: cod_unicox},
            success: function (data, textStatus, jqXHR) {

                console.log("Datos recibidos", data);
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        console.log("Nombre del campo: " + key); // Imprime el nombre del campo
                        console.log("Valor del campo " + key + ": " + data[key]); // Imprime el valor del campo
                    }
                }
                $("#id_sestablecmnt").val(data.id_sestablecmnt);
                
                $("#departamento_educa").val(data.departamento_educa);
                $("#provincia_educa").val(data.provincia_educa);
                $("#distrito_educa").val(data.distrito_educa);
                $("#nom_entidad").val(data.nom_entidad);
                $(".search_ie").prop("disabled", false);

                $("#btn_buscar").prop("disabled", false);
                $("#btn_buscar").text('');
                $("#btn_buscar").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');

//                mostrar_modal_info_ie();

            }, error: function (jqXHR, textStatus, errorThrown) {

                $(".search_ie").prop("disabled", false);
                $("#btn_buscar").prop("disabled", false);
                $("#btn_buscar").text('');
                $("#btn_buscar").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');

                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar el c\u00F3digo del establecimiento");
    }
}


function buscar_distritos() {
    $("#codi_dist_tdi").prop("disabled", true);

    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var codi_prov_tpr = $("#codi_prov_tpr").val();
    var coddistx = $("#codi_municipalidad option:selected").data("coddistx");

    console.log("codi_depa_dpt: " + codi_depa_dpt);
    console.log("codi_prov_tpr: " + codi_prov_tpr);
    console.log("coddistx: " + coddistx);

    $.ajax({
        url: urlx + "/ajaxBuscarDistritos",
        type: 'POST',
        data: {
            codi_depa_dpt: codi_depa_dpt,
            codi_prov_tpr: codi_prov_tpr,
            coddistx: coddistx
        },
        success: function (data, textStatus, jqXHR) {
            $("#codi_dist_tdi").prop("disabled", false);
            $("#codi_dist_tdi").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}



function actualizarDistritos() {
    var selectMunicipalidad = document.getElementById("codi_municipalidad");
    var selectDistrito = document.getElementById("codi_dist_tdi");

    console.log("aD");
    // Obtener el texto completo de la opción seleccionada en el primer select
    var selectedOptionText = selectMunicipalidad.options[selectMunicipalidad.selectedIndex].text;

    // Si el texto completo de la opción seleccionada contiene "MUNICIPALIDAD PROVINCIAL", deshabilitar el segundo select
    if (selectedOptionText.indexOf("MUNICIPALIDAD PROVINCIAL") !== -1) {
        selectDistrito.disabled = true;
        selectDistrito.value = "";
    } else {
        selectDistrito.disabled = false;
    }
}
//   
function buscar_municipalidades() {
    // Obtener los valores seleccionados
    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var codi_prov_tpr = $("#codi_prov_tpr").val();
    var codi_dist_tdi = $("#codi_dist_tdi").val();

    // Verificar si se han seleccionado tanto el departamento como la provincia
    if (codi_depa_dpt && codi_prov_tpr) {
        // Ambos valores están seleccionados, proceder con la búsqueda
        $("#codi_municipalidad").prop("disabled", true);
        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
        console.log("Código de distrito seleccionado: ", codi_dist_tdi);

        // Crear el objeto de datos a enviar
        var requestData = {
            codi_depa_dpt: codi_depa_dpt,
            codi_prov_tpr: codi_prov_tpr
        };

        // Verificar si se ha seleccionado el distrito y agregarlo a los datos
        if (codi_dist_tdi) {
            requestData.codi_dist_tdi = codi_dist_tdi;
        }

        $.ajax({
            url: urlx + "/ajaxBuscarMunicipalidades",
            type: 'POST',
            data: requestData,
            success: function (data, textStatus, jqXHR) {
                $("#codi_municipalidad").prop("disabled", false);
                $("#codi_municipalidad").html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 401) {
                    alert("Su sesión ha finalizado");
                } else {
                    alert("Ocurrió un error al cargar");
                }
            }
        });
    } else {
        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
        console.log("Por favor seleccione tanto el departamento como la provincia");
    }
}


function actualizarCampos() {
    var selectMunicipalidad = document.getElementById("codi_municipalidad");
    var selectedIndex = selectMunicipalidad.selectedIndex;

    if (selectedIndex > 0) {
        var selectedOption = selectMunicipalidad.options[selectedIndex];
        var codUnico = selectedOption.getAttribute("data-cod-unico");

        console.log("codigo :" + codUnico);
        console.log("Código único enviado al servidor:", codUnico);

        $.ajax({
//            url: urlx + "/ajaxBuscarCodUnico", 
//            type: 'POST',
            url: urlx + "/ajaxBuscarCodUnico",
            type: 'GET',
            data: {cod_unico: codUnico},
            success: function (response) {

                if (response.existe) {
                    // Si el código único existe, mostrar una alerta con SweetAlert
                    Swal.fire({
                        icon: 'warning',
                        title: 'Atención',
                        text: 'Ya se encuentra registrada; Por favor, elija otra Municipalidad.'
                    });
                    limpiarCampos();
                } else {
                    // Si el código único no existe, completar los campos
                    //  completarCampos(selectedOption);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Si hay un error en la petición AJAX, completar los campos como lo hacías antes
                completarCampos(selectedOption);
            }
        });
    } else {
        // Si no se selecciona ninguna municipalidad, limpiar los campos
        limpiarCampos();
    }
}


function limpiarCampos() {
    document.getElementById("codi_depa_dpt").value = "";
    document.getElementById("codi_prov_tpr").value = "";
    document.getElementById("codi_dist_tdi").value = "";
    document.getElementById("codi_municipalidad").value = "";
}


function mayus(e) {
    e.value = e.value.toUpperCase();
}

////////////////VALIDACION GENERAL PARA NUMEROS////////////
function aplicarExpresionRegular() {
    var sopInputs = document.querySelectorAll('.sop');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Limitar el ingreso a igual o menos de 9 caracteres
            if (this.value.length > 12) {
                this.value = this.value.slice(0, 12);
            }
            // Aplicar expresión regular para permitir solo números
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });
}

function aplicarExpresionRegular_decimal() {
    var sopInputs = document.querySelectorAll('.decimal');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            
            if (this.value.length > 9) {
                this.value = this.value.slice(0, 9);
            }
           
            this.value = this.value.replace(/[^0-9.]/g, '');

            
            var parts = this.value.split('.');
            if (parts.length > 2) {
                this.value = parts[0] + '.' + parts.slice(1).join('');
            }
        });
    });
}

function aplicarExpresionRegularTexto() {
    var textInputs = document.querySelectorAll('.only-text');

    textInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Limitar el ingreso a igual o menos de 90 caracteres
            if (this.value.length > 90) {
                this.value = this.value.slice(0, 90);
            }
            // Aplicar expresión regular para permitir solo letras y espacios
            this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        });
    });
}


function aplicarFormatoFecha() {
    var sopInputs = document.querySelectorAll('.fechax');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remover cualquier caracter que no sea un número
            let inputValue = this.value.replace(/[^0-9]/g, '');

            // Agregar las barras en las posiciones adecuadas
            if (inputValue.length > 2 && inputValue.length <= 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
            } else if (inputValue.length > 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4) + '/' + inputValue.slice(4, 8);
            }

            // Limitar el ingreso a igual o menos de 10 caracteres (incluyendo las barras "/")
            this.value = inputValue.slice(0, 10);
        });

        // Validar el ingreso cuando el input pierde el foco
        input.addEventListener('blur', function () {
            var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(this.value)) {

                Swal.fire({
                    title: 'Atención',
                    text: 'Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.'
                });
                this.value = '';
            }
        });
    });
}
function aplicarFormatoFecha2() {
    var sopInputs = document.querySelectorAll('.fechay');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remover cualquier caracter que no sea un número
            let inputValue = this.value.replace(/[^0-9]/g, '');

            // Agregar las barras en las posiciones adecuadas
            if (inputValue.length > 2 && inputValue.length <= 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
            } else if (inputValue.length > 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4) + '/' + inputValue.slice(4, 8);
            }

            // Limitar el ingreso a igual o menos de 10 caracteres (incluyendo las barras "/")
            this.value = inputValue.slice(0, 10);
        });

        // Validar el ingreso cuando el input pierde el foco
        input.addEventListener('blur', function () {
            var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(this.value)) {

                Swal.fire({
                    title: 'Atención',
                    text: 'Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.'
                });
                this.value = '';
            }
        });
    });
}
////////////////////FIN VALIDACION NUMÉRICA//////////////// 

function buscar_dni_funcionario() {

    var num_dni = $("#dni_funcionario").val();
    if (num_dni !== "" && num_dni.length == 8) {
        $("#btn_buscar_dni").prop("disabled", true);
        $("#btn_buscar_dni").text('');
        $("#btn_buscar_dni").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');
        $.ajax({
            url: urlx + "/ajaxBuscarByDNI",
            type: 'POST',
            data: {num_dni: num_dni},
            success: function (data, textStatus, jqXHR) {


                $("#nom_funcionario").val(data.nom_funcionario);
                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
            }, error: function (jqXHR, textStatus, errorThrown) {

                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar los 8 d\u00EDgitos del n\u00FAmero DNI");
    }
}


function buscar_dni_defensor() {

    var num_dni = $("#dni_defensor_demuna").val();
    if (num_dni !== "" && num_dni.length == 8) {
        $("#btn_buscar_dni").prop("disabled", true);
        $("#btn_buscar_dni").text('');
        $("#btn_buscar_dni").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');
        $.ajax({
            url: urlx + "/ajaxBuscarByDNIdefensor",
            type: 'POST',
            data: {num_dni: num_dni},
            success: function (data, textStatus, jqXHR) {


                $("#nom_defensor").val(data.nom_defensor);
                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
            }, error: function (jqXHR, textStatus, errorThrown) {

                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar los 8 d\u00EDgitos del n\u00FAmero DNI");
    }
}





function validar_parcial(elem) {
    var name_btn = elem.id;
    var sec_x = name_btn.substring(12, 18);
    var id_ficha = $("#id_ficha").val();
    var id_sec_x;

    if (!id_ficha) {
        
        Swal.fire({
                    text: 'Por favor, primero Guarde para Validar Ficha.'
                });
        return;
    }

    if (sec_x === "sec_1") {
        id_sec_x = id_ficha;
    } else {
        id_sec_x = $("#id_" + sec_x).val();
    }

    console.log("id_ficha: " + id_ficha);
    console.log("id_sec_x: " + id_sec_x);
    console.log("sec_x: " + sec_x);

    $.ajax({
        url: urlx + "/validarParcial",
        type: 'POST',
        data: {
            id_ficha: id_ficha,
            id_sec_x: id_sec_x,
            sec_x: sec_x
        },
        success: function (data, textStatus, jqXHR) {
            validarFicha(id_ficha);
            console.log("ffff: " + data.resultado);
            console.log("#div_" + sec_x + "_alert_validado");
            $("#div_" + sec_x + "_alert_validado").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert('Error al validar parcialmente la entidad');
            }
        }
    });
}

function validarFicha(id_ficha) {

    $.ajax({
        url: urlx + "/ajaxValidarFicha",
        type: 'POST',
        data: {
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {
            $("#div_validar_ficha_pca").html(data);

        }, error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }

        }
    });

}
////////////////////////////INICIO VALIDACIONES////////////////////

// function updateEntidadType() {
//        // Mapping abbreviations to full names
//        const entityMapping = {
//            'GL': 'Gobierno Local',
//            'GR': 'Gobierno Regional',
//            'M': 'Ministerio',
//            // Add more mappings as needed
//        };
//        
//        // Get the input field
//        const tipoEntidadInput = document.getElementById('c_tipo_entidad');
//        const abbreviation = tipoEntidadInput.value.trim();
//
//        // Update the input value with the full text if the abbreviation is in the mapping
//        if (entityMapping[abbreviation]) {
//            tipoEntidadInput.value = entityMapping[abbreviation];
//        }
//    }
//
//    // Call the function to update on page load or whenever appropriate
//    document.addEventListener('DOMContentLoaded', updateEntidadType);

document.addEventListener("DOMContentLoaded", () => {
  const tipoCarRadios = document.getElementsByName("tipo_car");
  const perfilCarRadios = document.querySelectorAll(".check_p1_3");

  const togglePerfilCarRadios = (isEnabled) => {
    perfilCarRadios.forEach((radio) => {
      radio.disabled = !isEnabled;
      if (!isEnabled) radio.checked = false; 
    });
  };

  tipoCarRadios.forEach((radio) => {
    radio.addEventListener("change", ({ target }) => {
      togglePerfilCarRadios(target.value === "c"); 
    });
  });

  //togglePerfilCarRadios(false);
});


function valida_tipocar(){
    var tipoCarRadios = document.getElementById("tipo_car_c");
  
  
    
    if (tipoCarRadios.checked) {
      
          var radios = document.querySelectorAll('.check_p1_3');
        radios.forEach(function (radio) {
           radio.disabled = false;
        });
        
       
        
    } else {
       
         var radios = document.querySelectorAll('.check_p1_3');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
        });
       
}
}



document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el grupo de radio buttons por nombre
  const perfilCarRadios = document.getElementsByName("perfil_car"); 
  const perfilTextarea = document.getElementById("perfil_car_otros");

  const toggleOtros = () => {
    // Verificamos si algún radio tiene el valor 'i' y está marcado
    const isOtrosSelected = Array.from(perfilCarRadios).some(
      (radio) => radio.checked && radio.value === 'i'
    );

    perfilTextarea.disabled = !isOtrosSelected;
    if (!isOtrosSelected) {
      perfilTextarea.value = ""; // Limpiar valor si está deshabilitado
    }
  };

  // Agregamos el evento a todos los radio buttons del grupo
  perfilCarRadios.forEach((radio) => {
    radio.addEventListener("change", toggleOtros);
  });

  toggleOtros(); // Establece el estado inicial
});

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll(".check_p1_3");

  function toggleRequired() {
    radios.forEach(radio => radio.required = false); // Desactivar required para todos
  }

  radios.forEach(radio => {
    radio.addEventListener("change", toggleRequired);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el grupo de radio buttons por nombre
  const acargodeRadios = document.getElementsByName("acargode"); 
  const acargodeTextarea = document.getElementById("acargode_otros");

  const toggleOtrosx = () => {
    // Verificamos si algún radio tiene el valor 'f' y está marcado
    const isOtrosSelected = Array.from(acargodeRadios).some(
      (radio) => radio.checked && radio.value === 'f'
    );

    acargodeTextarea.disabled = !isOtrosSelected;
    if (!isOtrosSelected) {
      acargodeTextarea.value = ""; // Limpiar valor si está deshabilitado
    }
  };

  // Agregamos el evento a todos los radio buttons del grupo
  acargodeRadios.forEach((radio) => {
    radio.addEventListener("change", toggleOtrosx);
  });

  toggleOtrosx(); // Establece el estado inicial
});


/*******************************************************************************/

function abrir_modal_sec1_2(id, id_ficha) {

    $("#loader_mdl_sec1_2").show();
    $("#loader_form_mdl_sec1_2").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec1_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_2_mdl").html(data);

            $("#loader_mdl_sec1_2").hide();
            $("#loader_form_mdl_sec1_2").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec1_2").show();
            $("#loader_form_mdl_sec1_2").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}


   
function guardar_modal_sec1_2() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec1_2").prop("disabled", true);
    $("#btn_save_mdl_sec1_2").text('');
    $("#btn_save_mdl_sec1_2").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var car_ficha_s1_p1_2pk = {
        id: parseInt($("#mdl_sec1_2_id").val()),
        id_ficha: parseInt($("#mdl_sec1_2_id_ficha").val())
    };

    console.log("1");
    var car_ficha_s1_p1_2 = {
        car_ficha_s1_p1_2pk: car_ficha_s1_p1_2pk,
        fch_registro: $("#mdl_sec1_2_fch_registro").val(),
        usu_registro: $("#mdl_sec1_2_usu_registro").val(),
        p1_2_grupo_ocupa: $("#p1_2_grupo_ocupa").val(),
        p1_2_peruanas: $("#p1_2_peruanas").val(),
        p1_2_extranjeras: $("#p1_2_extranjeras").val(),
        p1_2_peruanos: $("#p1_2_peruanos").val(),
        p1_2_extranjeros: $("#p1_2_extranjeros").val(),
         p1_2_total: $("#p1_2_total").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec1_2",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(car_ficha_s1_p1_2),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec1_2").html(data);

            $("#btn_save_mdl_sec1_2").prop("disabled", false);
            $("#btn_save_mdl_sec1_2").text('');
            $("#btn_save_mdl_sec1_2").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec1_2").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec1_2(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec1_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_2").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}




  function calcularTotal() {
    const peruanas = parseInt(document.getElementById('p1_2_peruanas').value) || 0;
    const extranjeras = parseInt(document.getElementById('p1_2_extranjeras').value) || 0;
    const peruanos = parseInt(document.getElementById('p1_2_peruanos').value) || 0;
    const extranjeros = parseInt(document.getElementById('p1_2_extranjeros').value) || 0;

    const total = peruanas + extranjeras + peruanos + extranjeros;

    document.getElementById('p1_2_total').value = total;
  }


 function validateDNIEntrevistador() {
     console.log("validateDNIEntrevistador");
    const dniInput = document.getElementById('dni_comisionado');
    const dniError = document.getElementById('dniError');

    // Mostrar mensaje de error si el DNI no tiene 8 dígitos
    if (dniInput.value.length !== 8) {
      dniError.style.display = 'block';
    } else {
      dniError.style.display = 'none';
    }
  }
  
  
  /////////////////////////////
  
function abrir_modal_sec1_3(id, id_ficha) {

    $("#loader_mdl_sec1_3").show();
    $("#loader_form_mdl_sec1_3").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec1_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_3_mdl").html(data);

            $("#loader_mdl_sec1_3").hide();
            $("#loader_form_mdl_sec1_3").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec1_3").show();
            $("#loader_form_mdl_sec1_3").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function calcularSumaP1_3() { 
    let total = 0;

    // Recorre cada fila y suma los valores de los subtotales
    document.querySelectorAll('.subtotal').forEach(function(element) {
        const subtotal = parseFloat(element.textContent);  // Asegúrate de que el valor es un número
        if (!isNaN(subtotal)) {
            total += subtotal;
        }
    });

    // Actualiza el campo de la suma total
    document.getElementById('p1_3_total').value = total;
}

// Llamar a la función cuando se cargue la página
window.onload = function() {
    calcularSumaP1_3();  // Calcula la suma total al cargar la página
};
   
function guardar_modal_sec1_3() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec1_3").prop("disabled", true);
    $("#btn_save_mdl_sec1_3").text('');
    $("#btn_save_mdl_sec1_3").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var car_ficha_s1_p1_3pk = {
        id: parseInt($("#mdl_sec1_3_id").val()),
        id_ficha: parseInt($("#mdl_sec1_3_id_ficha").val())
    };

    console.log("1");
    var car_ficha_s1_p1_3 = {
        car_ficha_s1_p1_3pk: car_ficha_s1_p1_3pk,
        fch_registro: $("#mdl_sec1_3_fch_registro").val(),
        usu_registro: $("#mdl_sec1_3_usu_registro").val(),
        p1_3_grupo_ocupa: $("#p1_3_grupo_ocupa").val(),
        p1_3_peruanas: $("#p1_3_peruanas").val(),
        p1_3_extranjeras: $("#p1_3_extranjeras").val(),
        p1_3_peruanos: $("#p1_3_peruanos").val(),
        p1_3_extranjeros: $("#p1_3_extranjeros").val(),
         p1_3_subtotal: $("#p1_3_subtotal").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec1_3",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(car_ficha_s1_p1_3),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec1_3").html(data);
            
            calcularSumaP1_3(); 
            
            $("#btn_save_mdl_sec1_3").prop("disabled", false);
            $("#btn_save_mdl_sec1_3").text('');
            $("#btn_save_mdl_sec1_3").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec1_3").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec1_3(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec1_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_3").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}



  function calcularTotalP1_3() {
    const peruanas = parseInt(document.getElementById('p1_3_peruanas').value) || 0;
    const extranjeras = parseInt(document.getElementById('p1_3_extranjeras').value) || 0;
    const peruanos = parseInt(document.getElementById('p1_3_peruanos').value) || 0;
    const extranjeros = parseInt(document.getElementById('p1_3_extranjeros').value) || 0;

    const total = peruanas + extranjeras + peruanos + extranjeros;

    document.getElementById('p1_3_subtotal').value = total;
  }




function valida_p1_4s1() {
    const p1_4_5 = document.getElementById("p1_4_5");
    const p1_4_detalle = document.getElementById("p1_4_detalle");

    if (p1_4_5.checked) {
        p1_4_detalle.disabled = false;
        p1_4_detalle.required = true;

    } else {
        p1_4_detalle.disabled = true;
        p1_4_detalle.required = false;
        p1_4_detalle.value = "";
    }
}


function validaRequeridosRadios(grupoNombre) {
    const radios = document.querySelectorAll(`input[name="${grupoNombre}"]`);
    let algunoSeleccionado = false;

    // Verificar si algún radio está seleccionado
    radios.forEach(radio => {
        if (radio.checked) {
            algunoSeleccionado = true;
        }
    });

    // Aplicar o quitar el atributo required según corresponda
    radios.forEach(radio => {
        radio.required = !algunoSeleccionado; // Si alguno está seleccionado, quita required; si no, pon required
    });
}






  const updateTotal = () => {
    const fields = [
      "p1_5_f_bolivia",
      "p1_5_f_chile",
      "p1_5_f_colo",
      "p1_5_f_ecu",
      "p1_5_f_vene",
      "p1_5_f_otro"
    ];

    const totalInput = document.getElementById("p1_5_f_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  
  const updateTotalm = () => {
    const fields = [
      "p1_5_m_bolivia",
      "p1_5_m_chile",
      "p1_5_m_colo",
      "p1_5_m_ecu",
      "p1_5_m_vene",
      "p1_5_m_otro"
    ];

    const totalInput = document.getElementById("p1_5_m_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
    const updateTotalx = () => {
    const fields = [
      "p1_5_f_bolivia",
      "p1_5_f_chile",
      "p1_5_f_colo",
      "p1_5_f_ecu",
      "p1_5_f_vene",
      "p1_5_f_otro",
       "p1_5_m_bolivia",
      "p1_5_m_chile",
      "p1_5_m_colo",
      "p1_5_m_ecu",
      "p1_5_m_vene",
      "p1_5_m_otro"
    ];

    const totalInput = document.getElementById("p1_5_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  const updateSubTotalBolivia = () => {
    const fields = [
      "p1_5_f_bolivia",
      "p1_5_m_bolivia"

    ];

    const totalInput = document.getElementById("p1_5_subtotal_bolivia");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
   const updateSubTotalChile = () => {
    const fields = [
      "p1_5_f_chile",
      "p1_5_m_chile"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_chile");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
  
   const updateSubTotalColo = () => {
    const fields = [
      "p1_5_f_colo",
      "p1_5_m_colo"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_colo");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
  
     const updateSubTotalEcu = () => {
    const fields = [
      "p1_5_f_ecu",
      "p1_5_m_ecu"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_ecu");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  

     const updateSubTotalVene = () => {
    const fields = [
      "p1_5_f_vene",
      "p1_5_m_vene"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_vene");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
   const updateSubTotalOtro = () => {
    const fields = [
      "p1_5_f_otro",
      "p1_5_m_otro"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_otro");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
 				

