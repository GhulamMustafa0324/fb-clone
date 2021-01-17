import React from 'react';
import '../css/SideBar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SideBarRow from './SideBarRow';
import { useStateValue } from '../StateProvider';





function SideBar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SideBarRow src={user.photoURL}
                title={user.displayName} />
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Vidoes" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />


        </div>
    );
}

export default SideBar;
