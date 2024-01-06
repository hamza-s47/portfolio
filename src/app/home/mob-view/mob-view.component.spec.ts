import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobViewComponent } from './mob-view.component';

describe('MobViewComponent', () => {
  let component: MobViewComponent;
  let fixture: ComponentFixture<MobViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
