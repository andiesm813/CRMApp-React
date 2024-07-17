import { IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetCustomers } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './accounts.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Accounts() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dropdown = useRef<IgrDropdown>(null);
  const newAccountDialog = useRef<IgrDialog>(null);
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('1');
  const { northwindCustomers } = useGetCustomers();

  return (
    <>
      <div className={classes("row-layout accounts-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout header")}>
                <div className={classes("row-layout page-title")}>
                  <div className={classes("row-layout group_3")}>
                    <img src="/src/assets/Accounts Icon - Green.svg" className={classes("image")} />
                  </div>
                  <h6 className={classes("h6")}>
                    <span>Accounts</span>
                  </h6>
                </div>
                <div className={classes("row-layout buttons")}>
                  <IgrButton variant="flat" size="large" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button button_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>business</span>
                    </span>
                    <span key={uuid()}>New Account</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_3")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>search</span>
                    </span>
                    <span key={uuid()}>Discover companies</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_4")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>import_export</span>
                    </span>
                    <span key={uuid()}>Import</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("row-layout filters-and-sorting")}>
                <div className={classes("row-layout group_4")}>
                  <IgrSelect outlined="false" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
                    <IgrSelectItem value="1" key="0b08afc4-59bb-4fd1-a401-b64d0e3ff97b">
                      <span key={uuid()}>My Accounts</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="93e87dc3-b7cf-4355-bfa0-e3a4494361e4">
                      <span key={uuid()}>All Accounts</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrInput placeholder="Search accounts" outlined="false" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                </div>
                <div className={classes("row-layout group_5")}>
                  <IgrButton variant="flat" size="large" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button button_5")}>
                    <span key={uuid()}>Recently Updated</span>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Name</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Recently Updated</span>
                    </IgrDropdownItem>
                  </IgrDropdown>
                </div>
              </div>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/account-sample`)}>
              <IgrGrid data={northwindCustomers} primaryKey="contactName" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newAccountDialog}>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <h6 className={classes("h6_1")}>
              <span>New Account</span>
            </h6>
            <div className={classes("column-layout group_7")}>
              <div className={classes("column-layout group_8")}>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>ACCOUNT INFORMATION</span>
                </p>
                <div className={classes("row-layout group_9")}>
                  <div className={classes("column-layout group_10")}>
                    <IgrInput label="Account Name" outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrSelect outlined="false" label="Type" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="b9453bca-78ba-40d1-b375-6ab46d4005ba">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="dfd34395-7feb-4847-9d0c-b7f05e0b7051">
                        <span key={uuid()}>Analyst</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="7b714172-db8b-46cd-8ab0-80d963077aa5">
                        <span key={uuid()}>Competitor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="a05c69a2-e05c-4e5c-909d-c35e71dc1044">
                        <span key={uuid()}>Customer</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="c67449d5-cfcd-465e-b5d0-87f2786f21c5">
                        <span key={uuid()}>Integrator</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="c8316736-97b3-4961-b081-62d56e9d4a89">
                        <span key={uuid()}>Investor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="5e80c2f9-c52d-4700-a860-31ebb1fcfaa8">
                        <span key={uuid()}>Partner</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="430304f8-c229-43c5-b902-d4015fd225f2">
                        <span key={uuid()}>Press</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="9" key="c726a6fd-7577-498c-b011-37da30e2fef3">
                        <span key={uuid()}>Prospect</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="10" key="11e65939-f178-499b-b61d-843ccafb5a99">
                        <span key={uuid()}>Reseller</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="11" key="40c963c7-8330-44ce-81ad-dae34c244492">
                        <span key={uuid()}>Other</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrInput label="Website" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrTextarea label="Description" outlined="false" className={classes("user-input")}></IgrTextarea>
                  </div>
                  <div className={classes("column-layout group_10")}>
                    <div className={classes("column-layout group_11")}>
                      <p className={classes("typography__caption text_1")}>
                        <span>Account Owner</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>Andrea Silveira</span>
                      </p>
                    </div>
                    <IgrInput label="Parent Account" placeholder="Search Accounts..." outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput type="tel" label="Phone" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrSelect outlined="false" label="Industry" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="d83493b1-f30e-420f-86f4-466a17de9cdc">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="09101d64-30da-48d4-bbd3-8e79c50c1797">
                        <span key={uuid()}>Agriculture</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="3b2f604f-e9ce-42b9-aa88-93f9d11c834f">
                        <span key={uuid()}>Apparel</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="d73abc48-db92-4b07-90b8-f945f02c8894">
                        <span key={uuid()}>Banking</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="caab3e22-4abb-44d4-8618-d1361bd298e3">
                        <span key={uuid()}>Biotechnology</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="c63d5bea-9793-41c4-82ba-75c3eb5a9b12">
                        <span key={uuid()}>Chemicals</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="a6a9b376-bbb2-4aa0-9191-f4a432f22beb">
                        <span key={uuid()}>Communications</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="e06f2a13-4585-47f0-9a1a-0a15a90aa120">
                        <span key={uuid()}>Construction</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect outlined="false" label="Employees" className={classes("user-input")}>
                      <IgrSelectItem value="1" key="0ea32dab-5978-4570-9a03-21a8adae6b99">
                        <span key={uuid()}>Self Employed</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="51ef0c48-7e00-453d-bfd3-9f4727ce96d8">
                        <span key={uuid()}>1-10</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="d396ad69-6963-41b6-98ba-e4f131bc0b7b">
                        <span key={uuid()}>11-50</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="bc1df7c2-2942-4592-b806-10e506390a4f">
                        <span key={uuid()}>51-250</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="6649d41c-4e4a-4229-b6c6-322d8bfea6a4">
                        <span key={uuid()}>+250</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout group_12")}>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>BILLING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="a27128f2-8361-4e82-b1b0-86814fca8813">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="1fbcaff2-d3a4-451e-bf2b-ba9ab2acf460">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="8999b9a4-e0a5-4898-aacf-0ec6792afbb1">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="0b92da25-ed8c-46a6-ab58-753dbe51b933">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="f59b2333-65c7-42a6-893c-e0a619ff83b6">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>SHIPPING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="55d5f586-7ba0-4479-b7d6-26f6f10118a3">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="1c04688a-69bc-41e5-90ee-a3e0196fe9e3">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="1ac819e0-d57c-4ca6-ba38-294974a64b78">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="4662cc50-2aaf-4cf0-abfe-a0fd9c0731d1">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="f7a7bd11-95c5-4f43-b331-e8ad8f2fd2f8">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" size="large" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Save</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
