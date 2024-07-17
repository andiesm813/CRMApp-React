import { IgrAvatar, IgrAvatarModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout group")}>
          <div onClick={() => navDrawer?.current?.toggle()} className={classes("row-layout group_1")}>
            <span className={classes("material-icons icon")}>
              <span key={uuid()}>menu</span>
            </span>
          </div>
          <IgrNavbar className={classes("navbar")}>
            <div className={classes("row-layout group_2")} key={uuid()}>
              <img src="/src/assets/CRM Logo.svg" className={classes("image")} />
            </div>
            <div style={{display: 'contents'}} slot="end" key={uuid()}>
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>search</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
            <div style={{display: 'contents'}} slot="end" key={uuid()}>
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>settings</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
            <div style={{display: 'contents'}} slot="end" key={uuid()}>
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>notifications_none</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrNavbar>
        </div>
        <div className={classes("row-layout group_3")}>
          <IgrNavDrawer open="true" position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <IgrList className={classes("list")} key={uuid()}>
              <div style={{display: 'contents'}} onClick={() => navigate(`/home`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Home-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Home</div>
                </IgrListItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/accounts`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Accounts-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Accounts</div>
                </IgrListItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/contacts`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Contacts-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Contacts</div>
                </IgrListItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/contracts`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Contracts-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Contracts</div>
                </IgrListItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/reports`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Reports-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Reports</div>
                </IgrListItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/calendar`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Calendar-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Calendar</div>
                </IgrListItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/tasks`)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src="/src/assets/Tasks-Avatar-Icon.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>Tasks</div>
                </IgrListItem>
              </div>
            </IgrList>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
