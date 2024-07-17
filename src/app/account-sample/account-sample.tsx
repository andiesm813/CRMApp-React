import { IgrAccordion, IgrAccordionModule, IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrChip, IgrChipModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrTab, IgrTabPanel, IgrTabs, IgrTabsModule } from '@infragistics/igniteui-react';
import styles from './account-sample.module.css';
import createClassTransformer from '../style-utils';

IgrAccordionModule.register();
IgrAvatarModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrChipModule.register();
IgrExpansionPanelModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrTabsModule.register();

export default function AccountSample() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("column-layout account-sample-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout account-header")}>
            <div className={classes("row-layout page-title")}>
              <div className={classes("row-layout group_1")}>
                <img src="/src/assets/Accounts Icon - Green.svg" className={classes("image")} />
              </div>
              <div className={classes("column-layout group_2")}>
                <h6 className={classes("content")}>
                  <span>Around the Horn</span>
                </h6>
                <p className={classes("typography__body-2 text")}>
                  <span>Brewing Company</span>
                </p>
              </div>
            </div>
            <div className={classes("row-layout group_3")}>
              <div className={classes("column-layout group_4")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Primary Contact</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>Thomas Hardy</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>Sales Representative</span>
                </p>
              </div>
              <div className={classes("column-layout group_4")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Phone</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>(123) 456-7890</span>
                </p>
              </div>
              <div className={classes("column-layout group_4")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Billing Address</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>120 Hanover Sq.</span>
                </p>
                <div className={classes("column-layout group_5")}>
                  <p className={classes("typography__caption text")}>
                    <span>London,  WA1 1DP</span>
                  </p>
                  <p className={classes("typography__caption text")}>
                    <span>UK</span>
                  </p>
                </div>
              </div>
              <div className={classes("column-layout group_4")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Website</span>
                </p>
                <p className={classes("typography__caption text_1")}>
                  <span>www.aroundthehorn.com</span>
                </p>
              </div>
              <div className={classes("column-layout group_6")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Account Owner</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>Sandy Anderson</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes("row-layout group_7")}>
          <div className={classes("column-layout group_8")}>
            <IgrTabs className={classes("tabs")}>
              <IgrTabPanel className={classes("column-layout tab-item-content")} key={uuid()}>
                <div className={classes("row-layout buttons-1")} key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>person_add</span>
                    </span>
                    <span key={uuid()}>Contact</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>star_border</span>
                    </span>
                    <span key={uuid()}>New Opportunity</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>error_outline</span>
                    </span>
                    <span key={uuid()}>New Case</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>note_add</span>
                    </span>
                    <span key={uuid()}>Add note</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>file_copy</span>
                    </span>
                    <span key={uuid()}>Add files</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <IgrAccordion singleExpand="true" className={classes("accordion")} key={uuid()}>
                  <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                    <div className={classes("column-layout group_9")} key={uuid()}>
                      <div className={classes("row-layout group_10")}>
                        <IgrAvatar initials="JL" shape="circle" className={classes("avatar")}></IgrAvatar>
                        <a href="" className={classes("typography__body-2 hyperlink")}>
                          <span>Janine Labrune</span>
                        </a>
                      </div>
                      <div className={classes("column-layout group_11")}>
                        <div className={classes("row-layout group_12")}>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Account Name:</span>
                          </p>
                          <p className={classes("typography__body-2 text")}>
                            <span>Thomas Hardy</span>
                          </p>
                        </div>
                        <div className={classes("row-layout group_12")}>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Title:</span>
                          </p>
                          <p className={classes("typography__body-2 text")}>
                            <span>Owner</span>
                          </p>
                        </div>
                        <div className={classes("row-layout group_13")}>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Direct:</span>
                          </p>
                          <IgrCheckbox className={classes("checkbox")}></IgrCheckbox>
                        </div>
                      </div>
                    </div>
                    <span slot="title" key={uuid()}>Related Contacts (1)</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                    <div className={classes("column-layout group_9")} key={uuid()}>
                      <div className={classes("row-layout group_10")}>
                        <IgrAvatar src="/src/assets/Account-List-Avatar-Icon.svg" shape="rounded" className={classes("avatar_1")}></IgrAvatar>
                        <a href="" className={classes("typography__body-2 hyperlink")}>
                          <span>Around The Horn</span>
                        </a>
                      </div>
                      <div className={classes("column-layout group_11")}>
                        <div className={classes("row-layout group_12")}>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Stage:</span>
                          </p>
                          <p className={classes("typography__body-2 text")}>
                            <span>Qualification</span>
                          </p>
                        </div>
                        <div className={classes("row-layout group_12")}>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Amount:</span>
                          </p>
                          <p className={classes("typography__body-2 text")}>
                            <span>Owner</span>
                          </p>
                        </div>
                        <div className={classes("row-layout group_12")}>
                          <p className={classes("typography__subtitle-2 text_2")}>
                            <span>Close Date:</span>
                          </p>
                          <p className={classes("typography__body-2 text")}>
                            <span>9/12/2022</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <span slot="title" key={uuid()}>Opportunities (1)</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                    <IgrList className={classes("list")} key={uuid()}>
                      <IgrListItem key={uuid()}>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar shape="circle" className={classes("avatar_2")}>
                            <span className={classes("material-icons icon_1")} key={uuid()}>
                              <span key={uuid()}>insert_drive_file</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div key={uuid()}>
                          <a href="" className={classes("typography__body-2 hyperlink_1")} key={uuid()}>
                            <span>Around-The-Horn-Contract-2022.docx</span>
                          </a>
                        </div>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar shape="circle" className={classes("avatar_3")}>
                            <span className={classes("material-icons icon_1")} key={uuid()}>
                              <span key={uuid()}>insert_drive_file</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div key={uuid()}>
                          <a href="" className={classes("typography__body-2 hyperlink_1")} key={uuid()}>
                            <span>Around-The-Horn-Contract-2021.docx</span>
                          </a>
                        </div>
                      </IgrListItem>
                    </IgrList>
                    <span slot="title" key={uuid()}>Contracts (2)</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                    <p className={classes("typography__body-2 text_3")} key={uuid()}>
                      <span>No cases filed.</span>
                    </p>
                    <span slot="title" key={uuid()}>Cases (0)</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                    <p className={classes("typography__body-2 text_3")} key={uuid()}>
                      <span>No notes added.</span>
                    </p>
                    <span slot="title" key={uuid()}>Notes (0)</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                    <p className={classes("typography__body-2 text_3")} key={uuid()}>
                      <span>No files uploaded</span>
                    </p>
                    <span slot="title" key={uuid()}>Files (0)</span>
                  </IgrExpansionPanel>
                </IgrAccordion>
              </IgrTabPanel>
              <IgrTab selected="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Related</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}>
                <div className={classes("row-layout demo-content")} key={uuid()}>
                  <img src="/src/assets/start-building-dark.svg" className={classes("image_1")} />
                  <p className={classes("typography__body-2 text_4")}>
                    <span>Remove the "demo-content" container, and add your own content.</span>
                  </p>
                </div>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Details</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}>
                <div className={classes("row-layout demo-content-1")} key={uuid()}>
                  <img src="/src/assets/start-building-dark.svg" className={classes("image_1")} />
                  <p className={classes("typography__body-2 text_4")}>
                    <span>Remove the "demo-content" container, and add your own content.</span>
                  </p>
                </div>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>News</span>
              </IgrTab>
            </IgrTabs>
          </div>
          <div className={classes("column-layout group_14")}>
            <IgrTabs className={classes("tabs")}>
              <IgrTabPanel className={classes("column-layout tab-item-content_2")} key={uuid()}>
                <div className={classes("column-layout group_15")} key={uuid()}>
                  <div className={classes("row-layout buttons")}>
                    <IgrButton variant="flat" size="large" className={classes("button")}>
                      <span className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>calendar_today</span>
                      </span>
                      <span key={uuid()}>New Meeting</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" size="large" className={classes("button")}>
                      <span className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>assignment</span>
                      </span>
                      <span key={uuid()}>New task</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton variant="flat" size="large" className={classes("button")}>
                      <span className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>call</span>
                      </span>
                      <span key={uuid()}>Log a call</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                  <IgrAccordion singleExpand="true" className={classes("accordion")}>
                    <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                      <IgrList className={classes("list")} key={uuid()}>
                        <IgrListItem key={uuid()}>
                          <div style={{display: 'contents'}} slot="start" key={uuid()}>
                            <IgrAvatar src="/src/assets/Calendar-Avatar-Icon.svg" className={classes("avatar_4")}></IgrAvatar>
                          </div>
                          <div key={uuid()}>
                            <div className={classes("column-layout group_16")} key={uuid()}>
                              <div className={classes("row-layout group_17")}>
                                <p className={classes("typography__subtitle-2 text_5")}>
                                  <span>Project Intro</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_18")}>
                                <p className={classes("typography__caption text_3")}>
                                  <span>11/1/2022</span>
                                </p>
                                <p className={classes("typography__caption text_3")}>
                                  <span>-</span>
                                </p>
                                <p className={classes("typography__caption text_3")}>
                                  <span>10am</span>
                                </p>
                              </div>
                              <IgrChip size="large" className={classes("chip")}>
                                <span key={uuid()}>Zoom Meeting</span>
                              </IgrChip>
                            </div>
                          </div>
                        </IgrListItem>
                        <IgrListItem key={uuid()}>
                          <div style={{display: 'contents'}} slot="start" key={uuid()}>
                            <IgrAvatar src="/src/assets/Calendar-Avatar-Icon.svg" className={classes("avatar_5")}></IgrAvatar>
                          </div>
                          <div key={uuid()}>
                            <div className={classes("column-layout group_16")} key={uuid()}>
                              <div className={classes("row-layout group_17")}>
                                <p className={classes("typography__subtitle-2 text_5")}>
                                  <span>Sync Meeting</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_18")}>
                                <p className={classes("typography__caption text_3")}>
                                  <span>11/7/2022</span>
                                </p>
                                <p className={classes("typography__caption text_3")}>
                                  <span>-</span>
                                </p>
                                <p className={classes("typography__caption text_3")}>
                                  <span>2pm</span>
                                </p>
                              </div>
                              <IgrChip size="large" className={classes("chip")}>
                                <span key={uuid()}>On Site Meeting</span>
                              </IgrChip>
                            </div>
                          </div>
                        </IgrListItem>
                        <IgrListItem key={uuid()}>
                          <div style={{display: 'contents'}} slot="start" key={uuid()}>
                            <IgrAvatar src="/src/assets/Calendar-Avatar-Icon.svg" className={classes("avatar_6")}></IgrAvatar>
                          </div>
                          <div key={uuid()}>
                            <div className={classes("column-layout group_16")} key={uuid()}>
                              <div className={classes("row-layout group_17")}>
                                <p className={classes("typography__subtitle-2 text_5")}>
                                  <span>Wrap Up Meeting</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_18")}>
                                <p className={classes("typography__caption text_3")}>
                                  <span>11/14/2022</span>
                                </p>
                                <p className={classes("typography__caption text_3")}>
                                  <span>-</span>
                                </p>
                                <p className={classes("typography__caption text_3")}>
                                  <span>4pm</span>
                                </p>
                              </div>
                              <IgrChip size="large" className={classes("chip")}>
                                <span key={uuid()}>Phone call</span>
                              </IgrChip>
                            </div>
                          </div>
                        </IgrListItem>
                      </IgrList>
                      <span slot="title" key={uuid()}>Upcoming Events (3)</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                      <p className={classes("typography__body-2 text_3")} key={uuid()}>
                        <span>No tasks added.</span>
                      </p>
                      <span slot="title" key={uuid()}>Tasks (0)</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel indicatorPosition="end" key={uuid()}>
                      <p className={classes("typography__body-2 text_3")} key={uuid()}>
                        <span>No call logged.</span>
                      </p>
                      <span slot="title" key={uuid()}>Call Logs (0)</span>
                    </IgrExpansionPanel>
                  </IgrAccordion>
                </div>
              </IgrTabPanel>
              <IgrTab selected="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Activity</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content_3")} key={uuid()}>
                <div className={classes("column-layout demo-content-1")} key={uuid()}>
                  <img src="/src/assets/start-building-dark.svg" className={classes("image_1")} />
                  <p className={classes("typography__body-2 text_4")}>
                    <span>Remove the "demo-content" container, and add your own content.</span>
                  </p>
                </div>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Conversations</span>
              </IgrTab>
            </IgrTabs>
          </div>
        </div>
      </div>
    </>
  );
}
