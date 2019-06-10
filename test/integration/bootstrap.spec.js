/* dependencies */
import { connect, clear, drop } from '@lykmapipo/mongoose-test-helpers';

/* setup mongo database */
before(done => connect(done));

/* clear mongo database */
before(done => clear(done));

/* drop mongo database */
after(done => drop(done));
