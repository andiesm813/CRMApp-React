import { useCallback, useEffect, useState } from 'react';
import { getMeetingsTasksList } from '../services/crmapp-data';
import { MeetingsTasksType } from '../models/CRMAppData/meetings-tasks-type';

export const useGetMeetingsTasksList = () => {
  const [meetingsTasks, setMeetingsTasks] = useState<MeetingsTasksType[]>([]);

  const requestMeetingsTasks = useCallback(() => {
    let ignore = false;
    getMeetingsTasksList()
      .then((data) => {
        if (!ignore) {
          setMeetingsTasks(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestMeetingsTasks();
  }, [requestMeetingsTasks]);

  return { requestCRMAppDataMeetingsTasks: requestMeetingsTasks, cRMAppDataMeetingsTasks: meetingsTasks, setCRMAppDataMeetingsTasks: setMeetingsTasks };
}
