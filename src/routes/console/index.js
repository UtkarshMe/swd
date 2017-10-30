/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';

const title = 'User Console';

export default {

  path: '/console',

  async action({context}) {
    if (context && !context.user) {
      return { redirect: '/login' };
    }

    const Console = await require.ensure([], require => require('./Console').default, 'admin');

    return {
      title,
      chunk: 'admin',
      component: <Layout isLoggedIn><Console title={title} /></Layout>,
    };
  },

};
