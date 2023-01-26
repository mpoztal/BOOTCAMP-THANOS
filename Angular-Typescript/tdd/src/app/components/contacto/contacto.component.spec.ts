import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Contacto } from "src/app/interfaces/contacto.interface";
import { ContactosService } from "src/app/service/contactos.service";
import { ContactoComponent } from "./contacto.component"

describe('Componente contactos', () => {
  let componente: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [ContactoComponent],
        providers: [ContactosService]
      }
    )
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges()
  })


  it('carga de componente', () => {
    //const componente = new ContactoComponent()
    expect(componente).toBeDefined();
    expect(componente).toBeInstanceOf(ContactoComponent);
  })

  it('genero un array de longitud 1', () => {
    //const componente = new ContactoComponent()
    expect(componente.arrContactos.length).toBe(1);
  })


  it('crear un contacto', () => {
    //const componente = new ContactoComponent();
    const longitud = componente.arrContactos.length
    const contacto: Contacto = {
      name: 'Juan',
      mail: 'juan@gmail.com',
      phone: '234567'
    }
    componente.crearContacto(contacto);
    componente.cargarDatos()

    expect(componente.arrContactos.length).toBe(longitud + 1)
    expect(componente.response).toBe('insertado');
  })

  it('borrar un contacto', () => {
    const longitud = componente.arrContactos.length;
    componente.deleteContacto(1);
    componente.cargarDatos()
    expect(componente.arrContactos.length).toBe(longitud - 1)
    expect(componente.responseDelete).toBe('borrado');

  })











})
