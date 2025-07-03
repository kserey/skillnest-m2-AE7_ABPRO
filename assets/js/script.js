$(document).ready(function() {
    
    // --- DATA ---
    const services = [
        { 
            id: '1',
            title: 'Cambio de Aceite', 
            price: '$20.000', 
            description: 'Consiste en drenar el aceite viejo del motor del vehículo y reemplazarlo con aceite nuevo, reemplazando también el filtro de aceite.' ,
            img: 'assets/img/oil.png'
        },
        { 
            id: '2', 
            title: 'Revisión de Frenos', 
            price: "$30.000", 
            description: 'Incluye una inspección exhaustiva del sistema de frenado: evaluación de pastillas, discos, líquido de frenos, líneas, mangueras y otros componentes críticos del sistema.',
            img: 'assets/img/brakes.png'
        },
        { 
            id: '3', 
            title: 'Diagnóstico Eléctrico', 
            price: "$50.000", 
            description: 'Permite detectar fallas en sensores, actuadores y la unidad de control electrónico del vehículo antes de que se conviertan en problemas mayores',
            img: 'assets/img/system.png'
        }
    ];

    const hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    const minutes = ["00", "15", "30", "45"];

    const districts = ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"];

    // --- GLOBAL VAR ---
    let currentService = null;

    // --- INIT MODALS ---
    const bookingModal = new bootstrap.Modal('#booking-modal');
    const paymentModal = new bootstrap.Modal('#payment-modal');
    const confirmationModal = new bootstrap.Modal('#confirmation-modal');
    
    // --- JQUERY SELECTORS ---
    const $timeSelect = $('#time-select');
    const $districtSelect = $('#district-select');
    const $servicesList = $('#services');


    // --- MASKS ---

    // CARD NUMBER MASK
    let cardNumberElement = document.getElementById('card-number');
    if (cardNumberElement) {
        let cardMask = IMask(cardNumberElement, { mask: '0000 0000 0000 0000' });
    }

    let expiryDateElement = document.getElementById('expiry-date');
    if (expiryDateElement) {
        let expiryDateMask = IMask(expiryDateElement,  {
            mask: 'MM{/}YY',
            blocks: {
                MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
                },
                YY: {
                mask: IMask.MaskedRange,
                from: 0,
                to: 99,
                },
            },
    },);
    }

    let cvvElement = document.getElementById('cvv');
    if (cvvElement) {
        let cvvMask = IMask(cvvElement, { mask: '000' });
    }

    // ------ FUNCTIONS ------
    function generateServiceCards() {
        $servicesList.empty();
        services.forEach(service => {
            let cardHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 d-flex flex-column">
                        <img src="${service.img}" class="card-img-top" alt="${service.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${service.title}</h5>
                            <p class="card-text">${service.description}</p>
                            <p class="card-text mt-auto"><strong>Precio: ${service.price}</strong></p>
                            <button class="btn btn-primary reserve-btn ms-auto" data-service-id="${service.id}">Reservar</button>
                        </div>
                    </div>
                </div>`;
            $servicesList.append(cardHTML);
        });
    }

    function populateTimeSelect() {
        $timeSelect.append($('<option value="" disabled selected>Selecciona una hora...</option>'));
        hours.forEach(hour => {
            minutes.forEach(minute => {
                let timeValue = `${hour}:${minute}`;
                $timeSelect.append($(`<option value="${timeValue}">${timeValue}</option>`));
            });
        });
    }
    
    function populateDistrictSelect() {
        $districtSelect.append($('<option value="" disabled selected>Selecciona una comuna...</option>'));
        districts.forEach(district => {
            let value = district.toLowerCase().replace(/\s+/g, '-');
            $districtSelect.append($(`<option value="${value}">${district}</option>`));
        });
    }

    // --- EXCECUTION  ---
    generateServiceCards();
    populateTimeSelect();
    populateDistrictSelect();

    document.getElementById('date-input').min = new Date().toISOString().split("T")[0];


    // ------ EVENT LISTENERS ------ 

    // OPEN BOOKING MODAL
    $servicesList.on('click', '.reserve-btn', function() {
        let serviceId = $(this).data('service-id');
        currentService = services.find(s => s.id == serviceId);

        if (currentService) {
            $('#modal-service-title').text(currentService.title);
            bookingModal.show();
        }
    });

    // BOOKING MODAL NEXT BUTTON => HIDE BOOKING MODAL AND SHOW PAYMENT MODAL
    $('#next-to-payment-btn').on('click', function() {
        const bookingForm = document.getElementById('booking-form');
        if (!bookingForm.checkValidity()) {
            bookingForm.classList.add('was-validated');
            return;
        }
        
        bookingModal.hide();
        
        if (currentService) {
            $('#modal-payment-title').text(currentService.title);
        }

        paymentModal.show();
    });
    
    // PAYMENT MODAL CONFIRMATION
    $('#payment-form').on('submit', function(event) {
        event.preventDefault();

        const serviceName = currentService.title;
        const bookingDate = $('#date-input').val();
        const bookingTime = $('#time-select').val();

        $('#modal-confirmation-service').text(serviceName);
        $('#modal-confirmation-date').text(`${bookingDate} a las ${bookingTime} hrs`);
        
        paymentModal.hide();
        confirmationModal.show();
    });

    // CONFIRMATION MODAL CLOSE => RESET ALL MODALS
    $('#confirmation-modal').on('hidden.bs.modal', function () {
        $('#booking-form')[0].reset();
        $('#payment-form')[0].reset();
        $('#booking-form').removeClass('was-validated');
    });


    // RESET FORM WHEN PAYMENT MODAL HIDES
    $('#payment-modal').on('hidden.bs.modal', function () {
    if (!$('#confirmation-modal').hasClass('show')) {
        $('#booking-form')[0].reset();
        $('#booking-form').removeClass('was-validated');
    }
    });
});







