import React, { Fragment, useEffect } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';

import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { pages } from "../../router";
import { useAppState } from "./hooks";

const App = () => {
  const { activePanel, popout, changeRoute } = useAppState();
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe(changeRoute);

    changeRoute({ route });
  }, []);

  if (!activePanel) {

    return null;
  }

  return (
    <Fragment>
      <View activePanel={activePanel} header={false} popout={popout}>
        <Panel id={pages.DESKS} separator={false}>
          <Desks />
        </Panel>

        <Panel id={pages.COLUMNS} separator={false} className="Columns">
          <Columns />
        </Panel>
      </View>
    </Fragment>
	);
};

export default App;

